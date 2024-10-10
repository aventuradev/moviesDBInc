import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import { movieDBAuthenticationAxiosFetcher } from '../../config/adapters/movieDB.adapter';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [sessionId, setSessionId] = useState<string>();

    useEffect(() => {
        loadAuth();
    }, []);


    const loadAuth = async () => {
        setIsLoading(true);

        const activeSession = await AsyncStorage.getItem('session');
        if (!activeSession || new Date() > new Date(JSON.parse(activeSession).expires_at)) {
            await AsyncStorage.removeItem('session');
            const session = await UseCases.createSessionUseCase(movieDBAuthenticationAxiosFetcher());
            AsyncStorage.setItem('session', JSON.stringify(session));
            setSessionId(session.session_id);
        } else {
            setSessionId(JSON.parse(activeSession).session_id);
        }

        setIsLoading(false);
    };

    return {
        isLoading,
        sessionId,
    };
};
