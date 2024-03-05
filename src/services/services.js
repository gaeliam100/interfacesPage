export const getUserData = async () => {
    const response = await fetch('https://kzx55n6w-3000.usw3.devtunnels.ms/users');
    const data = await response.json();
    return data;
}

export const getSingleUserData = async ({id}) => {
    const response = await fetch(`https://kzx55n6w-3000.usw3.devtunnels.ms/users/${id}`);
    const data = await response.json();

    const response2 = await fetch(`https://kzx55n6w-3000.usw3.devtunnels.ms/trabajos/${id}`);
    const data2 = await response2.json();

    return { userData: data, trabajoData: data2 };
}