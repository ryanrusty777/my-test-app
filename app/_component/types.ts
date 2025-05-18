export type ColorProps = {
    handleColor?:(e: React.ChangeEvent<HTMLInputElement>) => void
    bg?: string
    handleBtn?: React.MouseEventHandler<HTMLButtonElement>;
    titleText?: string
    handleTitleText?:(e: React.ChangeEvent<HTMLInputElement>) => void
    text?: string
    handleText?:(e: React.ChangeEvent<HTMLInputElement>) => void
    textColor?: string
    handleTextColor?:(e: React.ChangeEvent<HTMLInputElement>) => void
}

