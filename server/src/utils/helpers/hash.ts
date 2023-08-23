import bcrypt from "bcrypt";

export class Hash {
    async hashString(stringToHash: string, rounds = 10) {
        const salt = await bcrypt.genSalt(rounds);
        const hashedString = await bcrypt.hash(stringToHash, salt);
        return hashedString;
    }
    async compareHash(hashedString: string, stringToCompare: string) {
        const isMatch = await bcrypt.compare(stringToCompare, hashedString);
        return isMatch;
    }
}
export const hash = new Hash();
