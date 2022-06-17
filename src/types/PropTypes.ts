import { ReactNode } from "react";
import { TextStyle, ViewStyle }  from "react-native";

type numberToVoid = (pickedNumber: number) => void;
type voidToVoid = () => void;

export type PrimaryButtonProps = {
    children?: string;
    onPress?: any;
};

export type StartGameScreenProps = {
    onPickNumber: numberToVoid;
};

export type TitleProps = {
    children?: string;
};

export type GameScreenProps = {
    userNumber: number;
    onGameOver: voidToVoid;
};

export type NumberContainerProps = {
    children?: number;
};

export type CardProps = {
    children?: Array<ReactNode>;
};

export type InstructionTextProps = {
    children?: string;
    style?: TextStyle;
};
