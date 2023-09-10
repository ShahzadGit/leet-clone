import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import AuthModal from '../../components/Modals/AuthModal';
import { authModalState } from '../../atoms/authModalAtom';
import { useRecoilValue } from 'recoil';
import { auth } from '../../firebase/firebase';
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = ()=>{
    const authModal = useRecoilValue(authModalState)
	const [user, loading, error] = useAuthState(auth);
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (user) router.push("/");
		if (!loading && !user) setPageLoading(false);
	}, [user, router, loading]);

    if (pageLoading) return null;
    
    return <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
        <div className="max-w-7xl mx-auto">
            <Navbar />
            {authModal.isOpen && <AuthModal />}
        </div>
    </div>
}

export default AuthPage;