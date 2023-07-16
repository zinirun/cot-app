import { useEffect, useState } from 'react';
import AppleHealthKit, { HealthKitPermissions, HealthValue } from 'react-native-health';
import { toastDanger } from '../utils/toast';
import dayjs from 'dayjs';

const permissions = {
    permissions: {
        read: [AppleHealthKit.Constants.Permissions.Steps],
    },
} as HealthKitPermissions;

export default function useHealthKit() {
    const [failed, setFailed] = useState(false);
    const [kit, setKit] = useState<typeof AppleHealthKit | undefined>(undefined);
    const [dailyStepCount, setDailyStepCount] = useState(0);

    useEffect(() => {
        AppleHealthKit.initHealthKit(permissions, (error: string) => {
            if (error) {
                toastDanger('건강 권한을 가져올 수 없습니다');
                setFailed(true);
                return;
            }
            setKit(AppleHealthKit);
        });
    }, []);

    useEffect(() => {
        if (!!kit) {
            kit.getStepCount(
                {
                    startDate: dayjs().startOf('day').toISOString(),
                },
                (error: string, result: HealthValue) => {
                    if (!!error) {
                        toastDanger('걸음 수 동기화 중 문제가 발생했습니다');
                        return;
                    }
                    setDailyStepCount(Math.floor(result.value));
                },
            );
            kit.getStepCount(
                {
                    startDate: dayjs().add(-7, 'day').toISOString(),
                },
                (error: string, result: HealthValue) => {
                    if (!!error) {
                        toastDanger('걸음 수 동기화 중 문제가 발생했습니다');
                        return;
                    }
                    console.log(result);
                },
            );
        }
    }, [kit]);

    return { failed, kit, dailyStepCount };
}
