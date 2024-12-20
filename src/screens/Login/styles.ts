import {
  BlockedEyeIcon as BlockedEye,
  GoogleIcon as Google,
  UnBlockedEyeIcon as UnBlockedEye,
} from "@/components/Icons";
import styled, { css } from "styled-components";
import { IFormButton } from "./types";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 990px;
  height: 490px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  gap: 1rem;
`;

export const LoginTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 800;
`;

export const LoginForm = styled.form``;

export const EmailInput = styled.input`
  width: 29rem;
  height: 3.5rem;
  border-radius: 10px;
  background-color: #f0f0f0;
  outline: none;
  margin-bottom: 1rem;

  padding: 0 10px;

  &::placeholder {
    color: #565252;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const PasswordInputContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 29rem;
  height: 3.5rem;
  border-radius: 10px;
  background-color: #f0f0f0;
  outline: none;
  margin-bottom: 1rem;
  padding: 0 10px;
`;

export const PasswordInput = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  border-radius: 10px;

  &::placeholder {
    color: #565252;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const EyeIconContainer = styled.section`
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 29rem;
  height: 7.5;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const LoginOptionText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 800;
`;

export const LoginButton = styled.button<IFormButton>`
  width: 29rem;
  height: 3.5rem;
  border-radius: 10px;
  background-color: #7b2d2f;

  color: #fff;
  font-size: 20px;
  font-weight: 400;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9e3b3d;
  }

  &:active {
    background-color: #611f20;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: gray;
      pointer-events: none;
    `}
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  width: 29rem;
  height: 3.5rem;
  border-radius: 10px;
  background-color: #fff;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;

export const GoogleLoginText = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 400;
`;

export const BlockedEyeIcon = styled(BlockedEye)``;

export const UnBlockedEyeIcon = styled(UnBlockedEye)``;

export const GoogleIcon = styled(Google).attrs({ width: 26, height: 26 })``;
