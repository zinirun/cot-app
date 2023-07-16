import Typo from '../../components/Typo';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Spacer from '../../components/Spacer';
import useNav from '../../lib/hooks/useNavigation';

export default function MainPage() {
    const { navigate } = useNav();

    return (
        <Section>
            <Container height="100%" justify="center" align="center">
                <Typo size={60} bold>
                    COt
                </Typo>
                <Spacer y={20} />
                <Button bold onPress={() => navigate('Login')}>
                    계정으로 시작하기
                </Button>
                <Spacer y={12} />
                <Button type="secondary" size="small" onPress={() => navigate('Signup')}>
                    계정 만들기
                </Button>
            </Container>
        </Section>
    );
}
