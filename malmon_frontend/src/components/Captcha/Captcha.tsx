import { SimplifyPageDragPhoto } from '@/lang';
import Image from 'next/image';
import { useState } from 'react';
import s from './Captcha.module.scss';


export default function Captcha(
    {children}: {children: any}
) {
    const [captchaDone, setCaptchaDone] = useState(false);

    const language = process.env.NEXT_PUBLIC_LANGUAGE || 'ENG';

    const handleDragStart = (event: any) => {
      event.dataTransfer.setData('text/plain', 'Dragged');
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
    };

    const handleDrop = () => {
        setCaptchaDone(true);
    };
    

    return (
        <>
            {!captchaDone && <div className={s.captchaContainer}>

                <div className={s.captchaDraggable}>
                    <Image
                        src={'/mlogo.png'}
                        width={50}
                        height={50}
                        className={s.draggable}
                        alt="logo"
                        draggable="true"
                        onDragStart={handleDragStart}
                    />

                </div>
                <div>
                    <p>{SimplifyPageDragPhoto[language]}</p>
                </div>
                <div 
                    className={s.captchaTarget}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                ></div>
            
            </div>}
        
            {captchaDone && children}

        </>
    );
  };