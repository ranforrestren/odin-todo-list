const commandFactory = (commandType, parameters) => {
    return { commandType, parameters };
};

export default commandFactory;