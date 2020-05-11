import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "@/config/routes";

import DatePicker from "react-datepicker";
import Dropdown from "react-dropdown";
import { Create } from "@material-ui/icons";

const RegisterPage = () => {
  const genderOptions = [
    { value: 2, label: "Hombre" },
    { value: 1, label: "Mujer" },
    { value: 0, label: "Otro" },
  ];

  const [name, setName] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [gender, setGender] = useState(null);

  return (
    <>
      <WaveBackground
        src="/img/wave_background.png"
      />
      <Container>
        <FieldsContainer>
          <Info>
            <InfoHeader>Registrate</InfoHeader>
            <SuggestionText>
              ¿Ya estás registrado? &nbsp;
              <Link route="login">
                <SuggestionTextLink>Inicia sesión</SuggestionTextLink>
              </Link>
            </SuggestionText>
          </Info>
          <FieldsForm>
            <FieldGroup>
              <TextField>
                <TextFieldInput
                  aria-label="Nombre"
                  name="name"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </TextField>
              <TextField>
                <TextFieldInput
                  aria-label="Cédula / Pasaporte"
                  name="identityNumber"
                  placeholder="Cédula / Pasaporte"
                  value={identityNumber}
                  onChange={(e) => setIdentityNumber(e.target.value)}
                />
              </TextField>
              <TextField>
                <TextFieldInput
                  aria-label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </TextField>
              <TextField>
                <TextFieldInput
                  aria-label="Contraseña"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </TextField>
              <TextField>
                <DatePicker
                  placeholderText="Fecha de nacimiento"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  customInput={<TextFieldInput />}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </TextField>
              <TextField>
                <CustomDropdown
                  value={gender}
                  placeholder="Género"
                  options={genderOptions}
                  onChange={(option) => setGender(option)}
                />
              </TextField>
            </FieldGroup>

            <ActionArea>
              <ActionButton>
                <ButtonIcon>
                  <LockSvg fill="currentColor" />
                </ButtonIcon>
                Registrate
              </ActionButton>
            </ActionArea>
          </FieldsForm>
        </FieldsContainer>
      </Container>
    </>
  );
};

export default RegisterPage;

const WaveBackground = styled.img`
  ${tw`h-screen w-full absolute opacity-75`}
`;

const Container = styled.div`
  ${tw`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`}
`;

const FieldsContainer = styled.div`
  ${tw`max-w-md w-full z-10`}
`;

const Info = styled.div``;

const LogoImg = styled.img`
  ${tw`mx-auto h-12 w-auto`}
`;

const InfoHeader = styled.h2`
  ${tw`mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900`}
`;

const SuggestionText = styled.p`
  ${tw`mt-2 text-center text-sm leading-5 text-gray-600`}
`;

const SuggestionTextLink = styled.a`
  ${tw`font-medium focus:outline-none focus:underline`}
  
  color: ${(props) => props.theme.colors.pinkCyclamen.normal};
  &:hover {
    color: ${(props) => props.theme.colors.pinkCyclamen.light};
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

  .react-datepicker-wrapper {
    width: 100%;
  }
`;

const TextFieldInput = styled.input`
  ${tw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`}
`;

const CustomDropdown = styled(Dropdown)`
  .Dropdown-control {
    ${tw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`}
  }

  .Dropdown-menu {
    ${tw`appearance-none rounded-none rounded-b-md border border-gray-300 sm:text-sm`}
  }
`;

const ActionArea = styled.div`
  ${tw`mt-6`}
`;

const ActionButton = styled.button`
  ${tw`relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white focus:outline-none`}

  background: ${(props) => props.theme.colors.pinkCyclamen.normal};

  &:hover {
    background: ${(props) => props.theme.colors.pinkCyclamen.light};
  }

  &:focus {
    background: ${(props) => props.theme.colors.pinkCyclamen.light};
  }

  &:active {
    background: ${(props) => props.theme.colors.pinkCyclamen.light};
  }
`;

const ButtonIcon = styled.span`
  ${tw`absolute left-0 inset-y-0 flex items-center pl-3`}
`;

const LockSvg = styled(Create)`
  ${tw`h-5 w-5`}
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`;
