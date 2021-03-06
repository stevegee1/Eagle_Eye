import React from 'react';
import {
    Paper,
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    NativeSelect,
    SimpleGrid,
    createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {
        wrapper: {
            display: 'flex',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
            borderRadius: theme.radius.lg,
            padding: 4,
            border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
                }`,

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        form: {
            boxSizing: 'border-box',
            flex: 1,
            padding: theme.spacing.xl,
            paddingLeft: theme.spacing.xl * 2,
            borderLeft: 0,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
        },

        fields: {
            marginTop: -12,
        },

        fieldInput: {
            flex: 1,

            '& + &': {
                marginLeft: theme.spacing.md,

                [BREAKPOINT]: {
                    marginLeft: 0,
                    marginTop: theme.spacing.md,
                },
            },
        },

        fieldsGroup: {
            display: 'flex',

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        contacts: {
            boxSizing: 'border-box',
            position: 'relative',
            borderRadius: theme.radius.lg - 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid transparent',
            padding: theme.spacing.xl,
            flex: '0 0 280px',

            [BREAKPOINT]: {
                marginBottom: theme.spacing.sm,
                paddingLeft: theme.spacing.md,
            },
        },

        title: {
            textAlign: "center",
            marginBottom: theme.spacing.xl * 1.5,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },

        control: {
            [BREAKPOINT]: {
                flex: 1,
            },
        },
    };
});

export function ReviewCard() {
    const { classes } = useStyles();

    return (
        <Paper shadow="md" radius="lg" m="lg">
            <div className={classes.wrapper}>

                <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
                    <Text size="lg" weight={700} className={classes.title}>
                        Submit a review
                    </Text>

                    <div className={classes.fields}>
                        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                            <NativeSelect
                                data={['DeFi Lender', 'NFT Marketplace', 'Unknown DAO', 'someProject']}
                                placeholder="Pick the Project to review"
                                defaultValue=""
                                label="Select the Project you want to review"
                                required
                            />
                            <NativeSelect
                                data={['DeFi Lender', 'NFT Marketplace', 'Unknown DAO', 'someProject']}
                                placeholder="Type of the Review"
                                defaultValue=""
                                label="Select the type of review you're making"
                                required
                            />
                        </SimpleGrid>

                        <TextInput mt="md" label="Title" placeholder="Review Title" required />

                        <Textarea
                            mt="md"
                            required
                            label="Your thoughts"
                            placeholder="Please include all relevant information"
                            minRows={3}
                        />

                        <Group position="right" mt="md">
                            <Button type="submit" className={classes.control}>
                                Send Review
                            </Button>
                        </Group>
                    </div>
                </form>
            </div>
        </Paper>
    );
}