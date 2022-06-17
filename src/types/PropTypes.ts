import { ReactNode } from "react";
import { TextStyle } from "react-native";

type numberToVoid = (number: number) => void;
type voidToVoid = () => void;

export type PrimaryButtonProps = {
    children?: string | ReactNode;
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
    onGameOver: numberToVoid;
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

export type GameOverScreenProps = {
    roundsNumber: number;
    userNumber: number;
    onStartNewGame: voidToVoid;
};

export type GuessLogItemProps = {
    roundNumber: number;
    guess: number;
};
