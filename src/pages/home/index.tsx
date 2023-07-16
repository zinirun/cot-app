import Container, { ScrollContainer } from '../../components/Container';
import Section from '../../components/Section';
import Spacer from '../../components/Spacer';
import Typo from '../../components/Typo';
import useHealthKit from '../../lib/hooks/useHealthKit';
import ProfileBadge from '../../components/Badge';
import Card from '../../components/Card';
import Chart from '../../components/Chart';
import Navigator from '../../components/Navigator';

const NavigatorItems = [
    {
        key: 'Home',
        icon: '홈',
    },
    {
        key: 'Wallet',
        icon: '지갑',
    },
    {
        key: 'Challenge',
        icon: '챌린지',
    },
    {
        key: 'Ranking',
        icon: '랭킹',
    },
];

// TODO change to navigator page
export default function HomePage() {
    const { dailyStepCount } = useHealthKit();

    return (
        <Section style={{ paddingVertical: 12, height: '100%' }}>
            <Navigator items={NavigatorItems} currentKey="Home" />
            <Spacer y={24} />
            <Container row align="center" justify="center">
                <ProfileBadge name="전진" />
                <Spacer x={12} />
                <Typo bold size={44}>
                    {dailyStepCount.toLocaleString()}
                </Typo>
                <Spacer x={4} />
                <Typo color="#bbb">걸음(오늘)</Typo>
            </Container>
            <Spacer y={24} />

            <Container style={{ paddingHorizontal: 12 }}>
                <Typo bold size={20}>
                    인사이트
                </Typo>
                <Spacer y={12} />
                <Typo>🔥 어제보다 200 걸음 더 걸었습니다</Typo>
                <Spacer y={12} />
                <Chart
                    data={[
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                    ]}
                    labels={['January', 'February', 'March', 'April', 'May', 'June']}
                />
            </Container>
            <Spacer y={24} />

            <Container style={{ paddingLeft: 12 }}>
                <Typo bold size={20}>
                    미션
                </Typo>
                <Spacer y={12} />
                <ScrollContainer row>
                    <Card title="친구 초대" description="친구를 초대하고 500P를 받으세요" />
                    <Spacer x={8} />
                    <Card title="1000 걸음" description="1000 걸음을 쌓고 50P를 받으세요" />
                    <Spacer x={8} />
                    <Card title="5000 걸음" description="5000 걸음을 쌓고 300P를 받으세요" />
                </ScrollContainer>
            </Container>
        </Section>
    );
}
