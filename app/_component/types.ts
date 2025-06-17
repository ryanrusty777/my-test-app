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
    lang?: string
    FONT_OPTIONS?: { value: string; label: string }[];
    selectedFont?: string
    handleFont?:(e: React.ChangeEvent<HTMLSelectElement>) => void
    selectedTitleFont?: string
    handleTitleFont?:(e: React.ChangeEvent<HTMLSelectElement>) => void
}

