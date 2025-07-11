"use client";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  // const [loading, setLoading] = useState(true)
  const [firstname, setFirstname] = useState<string | null>(null);
  const [lastname, setLastname] = useState<string | null>(null);
  const [hashcode, setHashcode] = useState<string | null>(null);
  const [qr, setQr] = useState<string>("");

  const getProfile = useCallback(async () => {
    try {
      // setLoading(true)
      const { data, error, status } = await supabase
        .from("profiles")
        .select(`first_name, last_name, hashcode, qr`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setFirstname(data.first_name);
        setLastname(data.last_name);
        setHashcode(data.hashcode);
        setQr(data.qr);
      }
    } catch (error) {
      // alert("Error loading user data!" + { error });
      console.log(error);
    } finally {
      // setLoading(false)
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  // async function updateProfile({
  //   username,
  //   website,
  //   avatar_url,
  // }: {
  //   username: string | null
  //   fullname: string | null
  //   website: string | null
  //   avatar_url: string | null
  // }) {
  //   try {
  //     setLoading(true)

  //     const { error } = await supabase.from('profiles').upsert({
  //       id: user?.id as string,
  //       full_name: fullname,
  //       username,
  //       website,
  //       avatar_url,
  //       updated_at: new Date().toISOString(),
  //     })
  //     if (error) throw error
  //     alert('Profile updated!')
  //   } catch (error) {
  //     alert('Error updating the data!' + {error})
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  return (
    <div className={styles.wrapper}>
      <div className={styles.data}>
        <div className={styles.personData}>
          <h3>{firstname}</h3>
          <h3>{lastname}</h3>
        </div>
        <h1 className={styles.hash}>{hashcode}</h1>
        <small className={styles.small}>Используйте для регистрации на мероприятия</small>
      </div>
      {/* <img src={qr} alt="" /> */}
      <div className={styles.imageBlock}>
        <Image className={styles.qr} alt="qr" height={500} width={500} src={qr}></Image>
        <small className={clsx(styles.small,styles.subImage)}>Используйте для авторизации на мероприятиях</small>
      </div>
    </div>
  );
}
