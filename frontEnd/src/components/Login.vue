<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            md="4"
                            sm="8"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Login form</v-toolbar-title>
                                <div class="flex-grow-1"></div>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            id="email"
                                            label="Email"
                                            name="first_name"
                                            type="email"
                                    ></v-text-field>

                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="last_name"
                                            type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <div class="flex-grow-1"></div>
                                <v-btn @click="login" color="primary">Login</v-btn>
                                <v-btn @click="registerOpen" color="success">Register</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
        methods: {
            login() {
                this.$router.push('home/blogs')
            },
            registerOpen() {
                this.$router.push('/register')
            }
        }
    }
</script>