import { useState } from 'react';
import Button from '../../components/Button';
import Container, { KeyboardAvoidContainer } from '../../components/Container';
import Input from '../../components/Input';
import Section from '../../components/Section';
import Spacer from '../../components/Spacer';
import useNav from '../../lib/hooks/useNavigation';
import { toastSuccess } from '../../lib/utils/toast';
import { renderByShowInputs } from '../../lib/utils/render';

type ShowInputType = 'email' | 'password' | 'name' | 'phone';

export default function SignupPage() {
    const { navigate } = useNav();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const filled = !!email && !!password && !!name && !!phone;

    const [showInputs, setShowInputs] = useState<ShowInputType[]>(['email']);

    const handlePressSignup = () => {
        navigate('Login');
        toastSuccess('계정을 만들었습니다');
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
                    autoComplete="email"
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
                            autoComplete="password"
                            placeholder="비밀번호를 입력하세요"
                            password
                            onChangeText={setPassword}
                            onSubmitEditing={() => handleAddShowInput('name')}
                            autoFocus
                        />
                    </>,
                )}

                {r(
                    'name',
                    <>
                        <Spacer y={12} />
                        <Input
                            autoComplete="name"
                            placeholder="이름을 입력하세요"
                            onChangeText={setName}
                            onSubmitEditing={() => handleAddShowInput('phone')}
                            autoFocus
                        />
                    </>,
                )}

                {r(
                    'phone',
                    <>
                        <Spacer y={12} />
                        <Input
                            autoComplete="off"
                            keyboardType="numeric"
                            placeholder="전화번호를 입력하세요"
                            onChangeText={setPhone}
                            autoFocus
                        />
                    </>,
                )}

                <Spacer y={20} />
                <Container row align="center">
                    <Button onPress={handlePressSignup} disabled={!filled}>
                        계정 만들기
                    </Button>
                    <Spacer x={12} />
                    <Button type="secondary" size="small" onPress={() => navigate('Login')}>
                        계정이 있으신가요?
                    </Button>
                </Container>
            </KeyboardAvoidContainer>
        </Section>
    );
}
