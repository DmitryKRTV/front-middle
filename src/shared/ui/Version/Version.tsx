import { classNames } from '@/shared/lib/classNames/classNames'
import { useEffect, useState } from 'react'
import cls from './Version.module.scss'
import raw from '/version.txt'

interface VersionProps {
    className?: string
}

export const Version = (props: VersionProps) => {
    const { className } = props

    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
        const readFile = async () => {
          try {
            const response = await fetch(raw);
            const text = await response.text();
            setFileContent(text);
          } catch (error) {
            console.error('Error reading file:', error);
          }
        };
    
        readFile();
      }, []);
    
      return (
        <div className={classNames(cls.Version, {}, [className])}>
          <div>{fileContent}</div>
        </div>
      );
}