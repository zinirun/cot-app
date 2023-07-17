import { useState } from 'react';
import Button from '../../components/Button';
import Container, { KeyboardAvoidContainer } from '../../components/Container';
import Input from '../../components/Input';
import Section from '../../components/Section';
import Spacer from '../../components/Spacer';
import useNav from '../../lib/hooks/useNavigation';
import { renderByShowInputs } from '../../lib/utils/render';

type ShowInputType = 'email' | 'password';

export default function LoginPage() {
    const { resetWithOne } = useNav();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const filled = !!email && !!password;

    const [showInputs, setShowInputs] = useState<ShowInputType[]>(['email']);

    const handlePressLogin = () => {
        resetWithOne('Home');
    };

    const handleAddShowInput = (key: ShowInputType) => {
        setShowInputs((prev) => prev.concat(key));
    };

    const r = renderByShowInputs(showInputs);

    return (
        <Section>
            <KeyboardAvoidContainer height="100%" justify="center">
                <Input
                    keyboardType="email-address"
                    placeholder="이메일을 입력하세요"
                    autoFocus
                    onChangeText={setEmail}
                    onSubmitEditing={() => handleAddShowInput('password')}
                />

                {r(
                    'password',
                    <>
                        <Spacer y={12} />
                        <Input
                            keyboardType="ascii-capable"
                            placeholder="비밀번호를 입력하세요"
                            password
                            onChangeText={setPassword}
                            autoFocus
                            onSubmitEditing={handlePressLogin}
                        />
                    </>,
                )}

                <Spacer y={20} />
                <Container row align="center">
                    <Button onPress={handlePressLogin} disabled={!filled}>
                        로그인
                    </Button>
                    <Spacer x={12} />
                    <Button type="secondary" size="small">
                        계정을 잊으셨나요?
                    </Button>
                </Container>
            </KeyboardAvoidContainer>
        </Section>
    );
}
