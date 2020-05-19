import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import api from "@/src/api";
import { Router, Link } from "@/config/routes";

import DatePicker from "react-datepicker";
import Dropdown from "react-dropdown";
import SimpleReactValidator from "simple-react-validator";
import { Create } from "@material-ui/icons";

const RegisterPage = () => {
  // WARNING: This label-value pairs are declared on BACKEND - be careful when changing
  const genderOptions = [
    { value: 1, label: "Hombre" },
    { value: 2, label: "Mujer" },
    { value: 0, label: "Otro" },
  ];
  const validator = new SimpleReactValidator({
    validators: {
      gender: {
        message: "The gender must be specified.",
        rule: (gender, params, validator) => {
          return gender.value >= 0 || gender.value <= 2;
        },
        required: true,
      },
    },
  });

  const { users } = api();

  const [name, setName] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [gender, setGender] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    try {
      setShowErrorMessage(false);
      if (!validator.allValid())
        throw new Error("Validations not totally passed");

      const res = await users.create({
        email: email,
        password: password,
        identity_number: identityNumber,
        name: name,
        gender: gender,
        birth_date: birthDate,
      });
      if (res.status == 201) {
        // Store JWT on localStorage
        localStorage.setItem("user-jwt", res.data.token);
        Router.pushRoute("/");
      }
    } catch (error) {
      if (error.response && error.response.status == 400) {
        setErrorMessage(
          "¡Ese email o cédula/pasaporte ya han sido utilizados! Prueba con otra cosa"
        );
      } else {
        setErrorMessage("");
      }
      setShowErrorMessage(true);
    }
  };

  return (
    <>
      <WaveBackground src="/img/wave_background.png" />
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
                {validator.message("name", name, "required")}
              </TextField>
              <TextField>
                <TextFieldInput
                  aria-label="Cédula / Pasaporte"
                  name="identityNumber"
                  placeholder="Cédula / Pasaporte"
                  value={identityNumber}
                  onChange={(e) => setIdentityNumber(e.target.value)}
                />
                {validator.message(
                  "identityNumber",
                  identityNumber,
                  "required"
                )}
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
                {validator.message("email", email, "required|email")}
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
                <HintText>Mínimo 6 caracteres</HintText>
                {validator.message("password", password, "required|min:6")}
              </TextField>
              <TextField>
                <DatePicker
                  placeholderText="Fecha de nacimiento"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  customInput={<TextFieldInput />}
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                />
                {validator.message("birthDate", birthDate, "required")}
              </TextField>
              <TextField>
                <CustomDropdown
                  value={gender}
                  placeholder="Género"
                  options={genderOptions}
                  onChange={(option) => setGender(option)}
                />
                {validator.message("gender", gender, "gender")}
              </TextField>
            </FieldGroup>

            {showErrorMessage && (
              <ErrorText>
                {errorMessage ||
                  "¡Oops! Revisa que tus datos sean correctos 🧐"}
              </ErrorText>
            )}

            <ActionArea>
              <ActionButton onClick={handleRegister}>
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
  ${tw`h-full w-full fixed opacity-75`}
`;

const Container = styled.div`
  ${tw`h-full w-full flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8`}
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

const HintText = styled.span`
  ${tw`text-xs text-gray-600`}
`;

const ErrorText = styled.span`
  ${tw`text-red-600 text-sm font-medium`}
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

  &:hover, &:focus, &:active {
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
