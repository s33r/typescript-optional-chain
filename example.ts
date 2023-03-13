
interface Option {
    value: number;
}

interface Example {
    option: Option | null;
}

export function example() {
    const test: Example = {
        option: { value: 5 },
    };

    (test?.option as Option).value = 5;

    console.log(test);

}

example();