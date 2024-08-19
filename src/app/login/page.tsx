'use client';
import Image from "next/image";
import styles from "../page.module.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const router = useRouter();
    
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('token', token);
                router.push('/user/home');
            } else {
                alert('Login falhou. Verifique suas credenciais.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.login}>
                <Image src="/images/logo_preta.png" className={styles.imagem_logo} alt="TrackVentory logo" width={160} height={80} priority/>
                
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                />

                <button type="button" onClick={handleLogin}>Login</button>
            </div>
        </main>
    );
}
