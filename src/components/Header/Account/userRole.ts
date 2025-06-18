import {jwtDecode} from 'jwt-decode'
import { createClient } from '@/utils/supabase/client'

type UserRole = 'admin' | 'user' | null

interface JwtPayload { user_role?: UserRole }

/**
 * Слушает `onAuthStateChange`, декодирует JWT и возвращает роль.
 */
export async function getUserRole(): Promise<UserRole> {
  const supabase = await createClient()
  return new Promise((resolve) => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.access_token) {
        try {
          const payload = jwtDecode<JwtPayload>(session.access_token)
          resolve(payload.user_role ?? null)
        } catch {
          resolve(null)
        }
      } else {
        resolve(null)
      }
      data.subscription.unsubscribe()
    })
  })
}
