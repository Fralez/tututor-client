import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import api from "@/src/api";
import Link from "next/link";
import { useRouter } from "next/router";
import withCurrentUser from "@/lib/withCurrentUser";

import SimpleReactValidator from "simple-react-validator";
import { AccountCircle } from "@material-ui/icons";

const LoginPage = ({ setCurrentUser }) => {
  const Router = useRouter();
  const validator = new SimpleReactValidator();

  const { sessions } = api();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleLogin = async () => {
    try {
      setShowErrorMessage(false);
      if (!validator.allValid())
        throw new Error("Validations not totally passed");

      const res = await sessions.create(email, password);
      if (res.status == 201) {
        // Set current user
        setCurrentUser(res.data.user);
        Router.push("/");
      }
    } catch (error) {
      setShowErrorMessage(true);
    }
  };

  return (
    <>
      <WaveBackground src="/img/wave_background.png" />
      <Container>
        <FieldsContainer>
          <Info>
            <InfoHeader>Iniciar sesión</InfoHeader>
            <SuggestionText>
              ¿No estás registrado? &nbsp;
              <Link href="register">
                <SuggestionTextLink>Registrate</SuggestionTextLink>
              </Link>
            </SuggestionText>
          </Info>
          <FieldsForm>
            <FieldGroup>
              <TextField>
                <TextFieldInput
                  aria-label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {validator.message("email", email, "required|email")}
              </TextField>
              <TextField>
                <TextFieldInput
                  aria-label="Contraseña"
                  name="password"
                  type="password"
                  placeholder="Contraseña "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {validator.message("password", password, "required")}
              </TextField>
            </FieldGroup>

            {showErrorMessage && (
              <ErrorText>
                ¡Oops! Revisa que tus datos sean correctos 🧐
              </ErrorText>
            )}

            <ActionArea>
              <ActionButton onClick={handleLogin}>
                <ButtonIcon>
                  <LockSvg fill="currentColor" />
                </ButtonIcon>
                Iniciar sesión
              </ActionButton>
            </ActionArea>
          </FieldsForm>
        </FieldsContainer>
      </Container>
    </>
  );
};

export default withCurrentUser(LoginPage);

const WaveBackground = styled.img`
  ${tw`h-full w-full fixed opacity-75`}
`;

const Container = styled.div`
  ${tw`h-full w-full flex items-center justify-center px-4 sm:px-6 lg:px-8`}
`;

const FieldsContainer = styled.div`
  ${tw`max-w-md w-full z-10`}
`;

const Info = styled.div``;

const InfoHeader = styled.h2`
  ${tw`mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900`}
`;

const SuggestionText = styled.p`
  ${tw`mt-2 text-center text-sm leading-5 text-gray-600`}
`;

const SuggestionTextLink = styled.a`
  ${tw`font-medium focus:outline-none focus:underline`}
  
  color: ${(props) => props.theme.colors.violetBlue.normal};
  &:hover {
    color: ${(props) => props.theme.colors.violetBlue.light};
  }
`;

const FieldsForm = styled.div`
  ${tw`mt-8`}
`;

const FieldGroup = styled.div`
  ${tw`rounded-md shadow-sm`}
`;

const TextField = styled.div`
  ${tw`mb-2`}
`;

const TextFieldInput = styled.input`
  ${tw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`}
`;

const ErrorText = styled.span`
  ${tw`text-red-600 text-sm font-medium`}
`;

const ActionArea = styled.div`
  ${tw`mt-6`}
`;

const ActionButton = styled.button`
  ${tw`relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white focus:outline-none`}

  background: ${(props) => props.theme.colors.violetBlue.normal};

  &:hover, &:focus, &:active {
    background: ${(props) => props.theme.colors.violetBlue.light};
  }
`;

const ButtonIcon = styled.span`
  ${tw`absolute left-0 inset-y-0 flex items-center pl-3`}
`;

const LockSvg = styled(AccountCircle)`
  color: ${(props) => props.theme.colors.violetBlue.light};
`;
