type Item = {
    id: string
}

export const findItemByIndexId = <TItem extends Item>(
    items: TItem[],
    id: string
    ) => {
        return items.findIndex((item: TItem) => item.id === id)
}

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
    const item = array[from]
    return insertItemAtIndex(removeItemAtIndex(array, from), item, to)
}

export function removeItemAtIndex<TItem>(array: TItem[], index: number) {
    // return array with everything up to and then after the index, leaving out the index
    return [...array.slice(0, index), ...array.slice(index + 1)]
}

export function insertItemAtIndex<TItem>(array: TItem[], item: TItem, index: number) {
    //similar to above but we insert the item between the two slices
    return [...array.slice(0, index), item, ...array.slice(index)]
}