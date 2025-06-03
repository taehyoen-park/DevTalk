import bcrypt from 'bcrypt';

export const hash = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

export const compare = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
}