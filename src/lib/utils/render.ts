export const renderByShowInputs =
    <ShowInputType>(showInputsState: ShowInputType[]) =>
    (key: ShowInputType, renderer: React.ReactNode) => {
        if (showInputsState.includes(key)) {
            return renderer;
        }
    };
