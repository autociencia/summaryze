/**
 * Utilities to manipulate generic objects.
 */

export class ObjectUtils {

    private constructor() {
        throw new Error(`${ObjectUtils.name} cannot be instantiated`);
    }

    static exists(obj: any): boolean {
        return !(obj === null || obj === undefined || obj === '' || obj === false || obj === []);
    }

    static nonExists(obj: any): boolean {
        return !ObjectUtils.exists(obj);
    }
}