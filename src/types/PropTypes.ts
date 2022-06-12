type voidType = () => void;
type numberToVoid = (pickedNumber: number) => void;

export type PrimaryButtonProps = {
    children?: string;
    onPress?: voidType;
};

export type StartGameScreenProps = {
    onPickNumber: numberToVoid;
};
