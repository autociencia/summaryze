/**
 * Utilities to manipulate generic objects.
 */

export class ObjectUtils {

    private constructor() {
        throw new Error(`${ObjectUtils.name} cannot be instantiated`);
    }


    /**
     * Checks whether an object exists.
     * @param obj to be verified
     * @returns true if the object exists
     */
    static exists(obj: any): boolean {
        return !(obj === null || obj === undefined || obj === '' || obj === false || obj === []);
    }


    /**
     * Checks whether an object does not exists.
     * @param obj to be verified
     * @returns true if the object does not exists
     */
    static nonExists(obj: any): boolean {
        return !ObjectUtils.exists(obj);
    }
}