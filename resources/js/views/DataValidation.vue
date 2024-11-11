<template>

    <div class="flex space-x-8">
        <div class="w-1/2 bg-gray-50 p-4 border border-gray-300 rounded-lg">
            <div class="max-w-full mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg mt-10">
                <h2 class="text-2xl font-semibold mb-6 text-gray-800 text-center">Connection Information</h2>
                <form>

                    <!-- Connection type -->
                    <div class="mb-4 flex space-x-4">
                        <div :class="{ 'w-1/2': dbType === 'Snowflake', 'w-full': dbType !== 'Snowflake' }">
                            <label for="dbType" class="block text-gray-700 font-medium mb-2">Connection Type</label>
                            <select id="dbType" v-model="dbType" @blur="validateCI('dbType')" name="dbType"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                <option value="" disabled selected>Connection type</option>
                                <option value="MSSQL">MSSQL</option>
                                <option value="MySQL">MySQL</option>
                                <option value="Postgres">PostgreSQL</option>
                                <option value="Oracle">Oracle</option>
                                <option value="Snowflake">Snowflake</option>
                            </select>
                            <span class="error">{{ errorsCI.dbType }}</span>
                        </div>

                        <div class="w-1/2" v-if="dbType == 'Snowflake'">
                            <label for="schema" class="block text-gray-700 font-medium mb-2">Schema</label>
                            <input type="text" id="schema" v-model="schema" @blur="validateCI('schema')" name="schema"
                                placeholder="Please input schema"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsCI.schema }}</span>
                        </div>

                    </div>

                    <div class="mb-4 flex space-x-4">

                        <!-- Host/Account -->
                        <div class="w-1/2">
                            <label :for="dbType === 'Snowflake' ? 'accountC' : 'hostC'"
                                class="block text-gray-700 font-medium mb-2">
                                {{ dbType === 'Snowflake' ? 'Account' : 'Host Address' }}
                            </label>
                            <input type="text" :id="dbType === 'Snowflake' ? 'accountC' : 'hostC'" v-model="hostC"
                                @blur="validateCI('hostC')" :name="dbType === 'Snowflake' ? 'accountC' : 'hostC'"
                                :placeholder="dbType === 'Snowflake' ? 'Please input account' : 'Please input host address'"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsCI.hostC }}</span>
                        </div>

                        <!-- user -->
                        <div class="w-1/2">
                            <label for="userC" class="block text-gray-700 font-medium mb-2">User Name</label>
                            <input type="text" id="user" v-model="userC" @blur="validateCI('userC')" name="userC"
                                placeholder="Please input user name"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsCI.userC }}</span>
                        </div>
                    </div>

                    <div class="mb-4 flex space-x-4">
                        <!-- password -->
                        <div class="w-1/2">
                            <label for="passwordC" class="block text-gray-700 font-medium mb-2">Password</label>
                            <input type="password" id="password" v-model="passwordC" @blur="validateCI('passwordC')"
                                name="passwordC" placeholder="Please input password"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsCI.passwordC }}</span>
                        </div>

                        <!-- database -->
                        <div class="w-1/2">
                            <label for="databaseC" class="block text-gray-700 font-medium mb-2">Database</label>
                            <input type="text" id="database" v-model="databaseC" @blur="validateCI('databaseC')"
                                name="databaseC" placeholder="Please input target database"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsCI.databaseC }}</span>
                        </div>
                    </div>

                    <!-- Connection -->
                    <div class="mb-4 flex space-x-4">
                        <!-- source connection -->
                        <div class="w-1/2">
                            <label for="conn" class="block text-gray-700 font-medium mb-2">Connection
                                Name</label>
                            <input type="text" id="conn" v-model="conn" @blur="validateCI('conn')" name="conn"
                                placeholder="Please input connection name"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsCI.conn }}</span>
                        </div>

                        <!-- Port number -->
                        <div class="w-1/2" v-if="dbType !== 'Snowflake'">
                            <label for="portNumber" class="block text-gray-700 font-medium mb-2">Port Number</label>
                            <input type="text" id="portNumber" v-model="portNumber" @blur="validateCI('portNumber')"
                                name="portNumber" placeholder="Please input port number"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsCI.portNumber }}</span>
                        </div>
                    </div>

                    <div class="mb-4 flex space-x-4 justify-center">

                        <!-- Submit -->
                        <div class="flex justify-center">
                            <button type="submit" @click.prevent="validateConnection" :disabled="isSubmiting"
                                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                                <span v-if="isSubmiting" class="loader mr-2 bg-cyan-500"></span>
                                {{ isSubmiting ? 'Creating...' : 'Create Connection' }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="w-1/2 bg-gray-50 p-4 border border-gray-300 rounded-lg">
            <div class="max-w-full mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg mt-10">
                <h2 class="text-2xl font-semibold mb-6 text-gray-800 text-center">Validation Information</h2>
                <form>

                    <div class="mb-4 flex space-x-4">
                        <!-- host -->
                        <div class="w-1/2">
                            <label for="hostV" class="block text-gray-700 font-medium mb-2">Host Address</label>
                            <input type="text" id="hostV" v-model="hostV" @blur="validateVI('hostV')" name="hostV"
                                placeholder="Please input host address"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsVI.hostV }}</span>
                        </div>

                        <!-- user -->
                        <div class="w-1/2">
                            <label for="userV" class="block text-gray-700 font-medium mb-2">Target DB User Name</label>
                            <input type="text" id="userV" v-model="userV" @blur="validateVI('userV')" name="userV"
                                placeholder="Please input user name"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsVI.userV }}</span>
                        </div>
                    </div>

                    <div class="mb-4 flex space-x-4">
                        <!-- password -->
                        <div class="w-1/2">
                            <label for="passwordV" class="block text-gray-700 font-medium mb-2">Password</label>
                            <input type="password" id="password" v-model="passwordV" @blur="validateVI('passwordV')"
                                name="passwordV" placeholder="Please input password"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsVI.passwordV }}</span>
                        </div>

                        <!-- database -->
                        <div class="w-1/2">
                            <label for="databaseV" class="block text-gray-700 font-medium mb-2">Database</label>
                            <input type="text" id="databaseV" v-model="databaseV" @blur="validateVI('databaseV')"
                                name="databaseV" placeholder="Please input target database"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsVI.databaseV }}</span>
                        </div>
                    </div>

                    <!-- TODO: 让用户选 csv or json / error-only or not -->
                    <!-- TODO: csv结果放在dbt-demo -->
                    <div class="mb-4 flex space-x-4">
                        <!-- CSV or JSON -->
                        <div class="w-1/2">
                            <label for="resultType" class="block text-gray-700 font-medium mb-2">Result Type</label>
                            <div class="flex items-center space-x-4">
                                <label class="inline-flex items-center">
                                    <input type="radio" value="CSV" v-model="resultType"
                                        class="form-radio h-4 w-4 text-blue-600">
                                    <span class="ml-2">CSV</span>
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" value="JSON" v-model="resultType"
                                        class="form-radio h-4 w-4 text-blue-600">
                                    <span class="ml-2">JSON</span>
                                </label>
                            </div>
                            <span class="error">{{ errorsVI.resultType }}</span>
                        </div>

                        <!-- ERROR only or ALL -->
                        <div class="w-1/2">
                            <label for="content" class="block text-gray-700 font-medium mb-2">Result Content</label>
                            <div class="flex items-center space-x-4">
                                <label class="inline-flex items-center">
                                    <input type="radio" value="ONLY_FAILED" v-model="content"
                                        class="form-radio h-4 w-4 text-blue-600">
                                    <span class="ml-2">Failed Only</span>
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" value="ALL_DATA" v-model="content"
                                        class="form-radio h-4 w-4 text-blue-600">
                                    <span class="ml-2">All Data</span>
                                </label>
                            </div>
                            <span class="error">{{ errorsVI.content }}</span>
                        </div>
                    </div>

                    <!-- Connection -->
                    <div class="mb-4 flex space-x-4">
                        <!-- source connection -->
                        <div class="w-1/2">
                            <label for="source_conn" class="block text-gray-700 font-medium mb-2">Source Connection
                                Name</label>
                            <input type="text" id="source_conn" v-model="source_conn" @blur="validateVI('source_conn')"
                                name="source_conn" placeholder="Please input source connection name"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsVI.source_conn }}</span>
                        </div>

                        <!-- target connection -->
                        <div class="w-1/2">
                            <label for="target_conn" class="block text-gray-700 font-medium mb-2">Target Connection
                                Name</label>
                            <input type="text" id="target_conn" v-model="target_conn" @blur="validateVI('target_conn')"
                                name="target_conn" placeholder="Please input target connection name"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="error">{{ errorsVI.target_conn }}</span>
                        </div>
                    </div>

                    <!-- Schema name -->
                    <div class="mb-4">
                        <label for="schema" class="block text-gray-700 font-medium mb-2">Target DB's Schema Name</label>
                        <input type="text" id="target_conn" v-model="schema" @blur="validateVI('schema')"
                            name="target_conn" placeholder="Please input target DB's shcema name"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <span class="error">{{ errorsVI.schema }}</span>
                    </div>


                    <div class="mb-4 flex space-x-4 justify-center">

                        <!-- Column -->
                        <div class="flex justify-center">
                            <button type="submit" @click.prevent="validateColumn" :disabled="isSubmiting"
                                class="bg-blue-500 bg-cyan-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                                <span style="color: lightgreen;" v-if="isSubmiting"
                                    class="loader mr-2 bg-cyan-500"></span>
                                {{ isSubmiting ? 'Validating...' : 'Validate Column' }}
                            </button>
                        </div>

                        <!-- Row -->
                        <div class="flex justify-center">
                            <button type="submit" @click.prevent="validateRow" :disabled="isSubmiting"
                                class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                                <span v-if="isSubmiting" class="loader mr-2 bg-cyan-500"></span>
                                {{ isSubmiting ? 'Validating...' : 'Validate Row' }}
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>


</template>

<style scoped>
.error {
    color: red;
}
</style>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            hostC: '',
            userC: '',
            passwordC: '',
            databaseC: '',
            conn: '',
            portNumber: '',
            dbType: '',


            hostV: '',
            userV: '',
            passwordV: '',
            databaseV: '',
            source_conn: '',
            target_conn: '',
            resultType: '',
            content: '',

            schema: '',
            errorsVI: {},
            errorsCI: {},
            isSubmiting: false
        };
    },

    methods: {
        validateVI(field) {
            // Reset the error for this specific field
            this.errorsVI[field] = '';

            // Validation logic for each field
            if (field === 'hostV' && !this.hostV) {
                this.errorsVI.hostV = 'Host address is required';
            }
            if (field === 'userV' && !this.userV) {
                this.errorsVI.userV = 'User name is required';
            }
            if (field === 'passwordV' && !this.passwordV) {
                this.errorsVI.passwordV = 'Password is required';
            }
            if (field === 'target_conn' && !this.target_conn) {
                this.errorsVI.target_conn = 'Target connection name is required';
            }
            if (field === 'databaseV' && !this.databaseV) {
                this.errorsVI.databaseV = 'Database is required';
            }
            if (field === 'source_conn' && !this.source_conn) {
                this.errorsVI.source_conn = 'Source connection name is required';
            }
            if (field === 'resultType' && !this.resultType) {
                this.errorsVI.resultType = 'Result type is required'
            }
            if (field === 'content' && !this.content) {
                this.errorsVI.content = 'Result content is required'
            }
            if (field === 'schema' && !this.schema) {
                this.errorsVI.schema = 'Schema name is required'
            }

        },

        validateCI(field) {
            // Reset the error for this specific field
            this.errorsCI[field] = '';

            // Validation logic for each field
            if (field === 'hostC' && !this.hostC) {
                this.errorsCI.hostC = 'Host address is required';
            }
            if (field === 'userC' && !this.userC) {
                this.errorsCI.userC = 'User name is required';
            }
            if (field === 'passwordC' && !this.passwordC) {
                this.errorsCI.passwordC = 'Password is required';
            }
            if (field === 'databaseC' && !this.databaseC) {
                this.errorsCI.databaseC = 'Database is required';
            }
            if (field === 'conn' && !this.conn) {
                this.errorsCI.conn = 'Connection name is required';
            }
            if (field === 'dbType' && !this.dbType) {
                this.errorsCI.dbType = 'Connection type is required'
            }
            if (field === 'portNumber' && !this.portNumber) {
                this.errorsCI.portNumber = 'Port Number is required';
            }
            if (field === 'dbType' && !this.dbType) {
                this.errorsCI.dbType = 'Connection type is required'
            }
            if (field === 'schema' && !this.schema) {
                this.errorsCI.schema = 'Schema name is required'
            }
        },

        // Column validation
        async validateColumn() {

            this.isSubmiting = true;

            // Run validation on all fields
            this.validateVI('hostV');
            this.validateVI('userV');
            this.validateVI('passwordV');
            this.validateVI('databaseV');
            this.validateVI('source_conn');
            this.validateVI('target_conn');
            this.validateVI('dbType');
            this.validateVI('resultType');
            this.validateVI('content');
            this.validateVI('schema');

            // Check if there are any errors
            if (Object.values(this.errorsVI).some(error => error)) {
                this.isSubmiting = false;
                alert("Please input all the correct information")
                return;
            }

            const requestData = {
                host: this.hostV,
                user: this.userV,
                password: this.passwordV,
                database: this.databaseV,
                source_conn: this.source_conn,
                target_conn: this.target_conn,
                resultType: this.resultType,
                schema: this.schema,
                content: this.content,
            };

            try {

                const response = await axios.post('http://localhost:9000/api/validation/column', requestData);
                const { data } = response;
                const { validationStatus, information } = data;
                console.log(validationStatus);
                console.log("============================")

                if (validationStatus === "OK") { // Successful
                    console.log("--->", information);
                    this.clearForm();
                    alert("Row Validation successed, please check at dbt");
                    // TODO: 成功后的处理

                } else { // Fail
                    console.log("===错了===", information);

                }

            } catch (error) {
                console.log("===服务器===")
            } finally {
                this.isSubmiting = false;
            }

        },

        // Row validation
        async validateRow() {

            this.isSubmiting = true;

            // Run validation on all fields
            this.validateVI('hostV');
            this.validateVI('userV');
            this.validateVI('passwordV');
            this.validateVI('databaseV');
            this.validateVI('source_conn');
            this.validateVI('target_conn');
            this.validateVI('dbType');
            this.validateVI('resultType');
            this.validateVI('content');
            this.validateVI('schema');


            // Check if there are any errors
            if (Object.values(this.errorsVI).some(error => error)) {
                this.isSubmiting = false;
                alert("Please input all the correct information")
                return;
            }

            const requestData = {
                host: this.hostV,
                user: this.userV,
                password: this.passwordV,
                database: this.databaseV,
                source_conn: this.source_conn,
                target_conn: this.target_conn,
                resultType: this.resultType,
                schema: this.schema,
                content: this.content,
            };

            try {
                const response = await axios.post('http://localhost:9000/api/validation/row', requestData);
                const { data } = response;
                const { validationStatus, information } = data;
                console.log(validationStatus);
                console.log("============================")
                console.log(information)

                if (validationStatus === "OK") { // Successful
                    console.log("--->", information);
                    this.clearForm();
                    alert("Row Validation successed, please check at dbt");
                    // TODO: 成功后的处理

                } else { // Fail
                    console.log("===错了===", information);

                }
            } catch {

            } finally {
                this.isSubmiting = false;
            }
        },

        // Cerate connection validation
        async validateConnection() {

            console.log("===进来了===");

            this.isSubmiting = true;

            // Run validation on all fields
            this.validateCI('hostC');
            this.validateCI('userC');
            this.validateCI('passwordC');
            this.validateCI('databaseC');
            this.validateCI('conn');
            this.validateCI('dbType');

            if (this.dbType === 'Snowflake') {
                this.validateCI('schema');
                this.portNumber = "NO_PORT_NUMBER";
            } else {
                this.validateCI('portNumber');
            }

            // Check if there are any errors
            if (Object.values(this.errorsCI).some(error => error)) {
                this.isSubmiting = false;
                alert("Please input all the correct information")
                return;
            }

            let requestData = {
                host: this.hostC,
                user: this.userC,
                password: this.passwordC,
                database: this.databaseC,
                port: this.portNumber,
                connName: this.conn,
                dbType: this.dbType,
            };

            if (this.schema != null && this.dbType === 'Snowflake') {
                requestData = {
                    host: this.hostC,
                    user: this.userC,
                    password: this.passwordC,
                    database: this.databaseC,
                    connName: this.conn,
                    dbType: this.dbType,
                    requestSchema: this.schema,
                }
            }

            console.log("snowflake提交===>", requestData);

            try { // TODO: Create Connection
                const response = await axios.post('http://localhost:9000/api/create-connection', requestData);
                const { data } = response;
                const { validationStatus, information } = data;
                console.log(validationStatus);
                console.log("============================")
                console.log(information)

                if (validationStatus === "OK") { // Successful
                    console.log("--->", information);
                    this.clearForm();
                    alert("Connection created successfully.")
                    // TODO: 成功后的处理

                } else { // Fail
                    console.log("===错了===", information);
                    alert(`Something went wrong: ${information.error}`);
                    
                }

            } catch (error) {
                console.log("出错了=====> ", error)
            } finally {
                this.isSubmiting = false;
            }
        },

        // clear all the input
        clearForm() {

            this.hostC = '';
            this.hostV = '';
            this.userC = '';
            this.userV = '';
            this.passwordC = '';
            this.passwordV = '';
            this.databaseC = '';
            this.databaseV = '';
            this.database = '';
            this.conn = '',
                this.source_conn = '';
            this.schema = '';
            this.target_conn = '';
            this.resultType = '';
            this.portNumber = '';
            this.content = '';
            this.dbType = '';
            this.errorsC = {};
            this.errorsV = {};
        },
    },

};
</script>