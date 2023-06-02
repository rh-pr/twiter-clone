import UsernameForm from '@/components/UsernameForm';
import useUserInfo from '@/hooks/useUserInfo';

import { useSession} from "next-auth/react";
import {useEffect, useState} from "react";
// import axios from "axios";

import {useRouter} from "next/router";

export default function Home() {

  const {data:session} = useSession();
  const {userInfo,setUserInfo,status:userInfoStatus} = useUserInfo();
  const [posts,setPosts] = useState([]);
  const [idsLikedByMe,setIdsLikedByMe] = useState([]);
  const router = useRouter();

  if (userInfoStatus === 'loading') {
    return 'loading user info';
  }

  if (userInfo && !userInfo?.username) {
    return <UsernameForm />;
  }



  if (!userInfo) {
    console.log({session});
    router.push('/login');
    return 'no user info';
  }

  return <div>test</div>;
}
