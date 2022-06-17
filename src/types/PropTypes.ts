type numberToVoid = (pickedNumber: number) => void;

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
};

export type NumberContainerProps = {
    children?: number;
};
