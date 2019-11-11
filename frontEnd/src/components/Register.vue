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
                                            id="first_name"
                                            label="Name"
                                            v-model="form.first_name"
                                            type="text"
                                    ></v-text-field>
                                    <v-text-field
                                            id="last_name"
                                            label="Last Name"
                                            v-model="form.last_name"
                                            type="text"
                                    ></v-text-field>
                                    <v-text-field
                                            id="email"
                                            label="Email"
                                            v-model="form.email"
                                            type="email"
                                    ></v-text-field>

                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            v-model="form.password"
                                            type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <div class="flex-grow-1"></div>
                                <v-btn @click="loginOpen" color="primary">Login</v-btn>
                                <v-btn @click="register" color="success">Register</v-btn>
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
            form: {
                first_name: "h",
                last_name: "h2",
                email: "h3",
                password: "h4"
            }
        }),
        methods: {
            register() {
                this.$http.post('http://192.168.1.4:3000/signUp', {
                        'first_name': this.form.first_name,
                        'last_name': this.form.last_name,
                        'email': this.form.email,
                        'password': this.form.password
                    }
                ).then((response) => {
                    console.log(response);
                })
            },
            loginOpen() {
                this.$router.push('/')
            }
        }
    }
</script>