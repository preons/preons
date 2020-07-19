const {
    exec
} = require("child_process");
const {
    promisify
} = require("util");

const yaml = require("yaml");
const pExec = promisify(exec);

it('should create a yaml config file with preon syntax', async () => {
    let { stdout } = await pExec("preons translate src/lib/translate/examples/breakpoints.css")
    let json = yaml.parse(stdout)

    expect(json).toEqual({
        preons: {
            rules: {},
            properties: {
                display: {
                    class: '',
                    values: {
                        db: 'block'
                    }
                }
            },
            breakpoints: {
                m: '768px',
                l: '1200px'
            }
        }
    })
})