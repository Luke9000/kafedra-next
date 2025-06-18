// src/hooks/useUserRole.ts
import { useState, useEffect } from "react";
import { createClient, Session } from "@supabase/supabase-js";
import {jwtDecode} from "jwt-decode";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type UserRole = "admin" | "user" | null;

interface JwtPayload {
  user_role?: UserRole;
}

export function useUserRole() {
  const [role, setRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    const updateRole = (session: Session | null) => {
      if (session?.access_token) {
        try {
          const payload = jwtDecode<JwtPayload>(session.access_token);
          setRole(payload.user_role ?? null);
        } catch {
          setRole(null);
        }
      } else {
        setRole(null);
      }
      setLoading(false);
    };

    // Сначала подгружаем текущую сессию
    supabase.auth.getSession().then(({ data: { session } }) => {
      updateRole(session);
    });

    // Подписываемся на изменение сессии (логин/логаут/рефреш токена)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        updateRole(session);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { role, loading };
}
