import Head from "next/head";
import { Button, FormControl, Input } from "@chakra-ui/react";
import { Container, LoginContainer, ButtonContainer } from "./styles";
import { IViewLogin } from "./types";

export const ViewLogin = ({
  isLoading,
  error,
  setPassword,
  password,
  setEmail,
  email,
  handleSubmit,
}: IViewLogin) => {
  return (
    <>
      <Head>
        <title>Laboratório B208</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <LoginContainer>
          <h1>Bem-vindo ao agendamento do laboratório B 208</h1>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                marginBottom="20px"
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p>{error}</p>}
              <ButtonContainer>
                <Button
                  mt={4}
                  bg="#006a12"
                  _hover={{ bg: "green.500" }}
                  color="white"
                  type="submit"
                  isLoading={isLoading}
                >
                  Entrar
                </Button>
              </ButtonContainer>
            </FormControl>
          </form>
        </LoginContainer>
      </Container>
    </>
  );
};
