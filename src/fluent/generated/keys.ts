import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '43359b35a5014173b68b3139786bdb99'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '005f7f61027c477cb4cb7d0dbd12055a'
                    }
                    'read-time-entries': {
                        table: 'sys_security_acl'
                        id: 'a4b729929a5445829f1467e9d18defb3'
                        deleted: true
                    }
                    'time-entries-create-acl': {
                        table: 'sys_security_acl'
                        id: '15ca32624bfa48da899c4ba179589576'
                        deleted: true
                    }
                    'time-entries-delete-acl': {
                        table: 'sys_security_acl'
                        id: '26e1f4116dc94375871688ee0aee5fde'
                        deleted: true
                    }
                    'time-entries-read-acl': {
                        table: 'sys_security_acl'
                        id: 'e75b54fb557f4726a56e0fe23949f26e'
                        deleted: true
                    }
                    'time-entries-write-acl': {
                        table: 'sys_security_acl'
                        id: '1ac0f46c72b64a3cadc30836b6fb6635'
                        deleted: true
                    }
                    'time-entry-1': {
                        table: 'x_snc_alfred_time_entries'
                        id: '70b8d42bf1b3464b8c86ee90f7bf6089'
                    }
                    'time-entry-10': {
                        table: 'x_snc_alfred_time_entries'
                        id: 'df917783eaeb4ae3a5e9f08b674467eb'
                    }
                    'time-entry-11': {
                        table: 'x_snc_alfred_time_entries'
                        id: 'fcac08e36b01497bbb6823c00da9b37f'
                    }
                    'time-entry-12': {
                        table: 'x_snc_alfred_time_entries'
                        id: '4a5bef0c15fd4f09af36911812317fb1'
                    }
                    'time-entry-13': {
                        table: 'x_snc_alfred_time_entries'
                        id: '7d646e1c28da4071bae2b1d6b50bc017'
                    }
                    'time-entry-14': {
                        table: 'x_snc_alfred_time_entries'
                        id: '6119d72a5af645a0b5e725ffaaaaa664'
                    }
                    'time-entry-15': {
                        table: 'x_snc_alfred_time_entries'
                        id: '2bde0275f575423aba1ccdde003b9c41'
                    }
                    'time-entry-2': {
                        table: 'x_snc_alfred_time_entries'
                        id: 'f670e02bc76b47c5aed8934eb2e0a213'
                    }
                    'time-entry-3': {
                        table: 'x_snc_alfred_time_entries'
                        id: '0c74abc9204e4d9d812971a8f964d6e8'
                    }
                    'time-entry-4': {
                        table: 'x_snc_alfred_time_entries'
                        id: 'b47253073a0c435fbf4a111672503c4e'
                    }
                    'time-entry-5': {
                        table: 'x_snc_alfred_time_entries'
                        id: '129b54a6b18e44048aab723ee33c9f4a'
                    }
                    'time-entry-6': {
                        table: 'x_snc_alfred_time_entries'
                        id: 'ecaac1d402f642f188596bd47025e9e2'
                    }
                    'time-entry-7': {
                        table: 'x_snc_alfred_time_entries'
                        id: 'f6abf86855134304bbf168a6ea703414'
                    }
                    'time-entry-8': {
                        table: 'x_snc_alfred_time_entries'
                        id: 'd2e7f00e1c6f4013b5feb9fdb3ff7760'
                    }
                    'time-entry-9': {
                        table: 'x_snc_alfred_time_entries'
                        id: '8063e927844047c8aabedb279c8090b1'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0173d5f79c674d6c8f65e64661fd6439'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'activity_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '111eba25831d4f902a3771647daad306'
                        key: {
                            sys_ui_section: '151e7a25831d4f902a3771647daad3b1'
                            element: '.begin_split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '151e7a25831d4f902a3771647daad3b1'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            caption: 'NULL'
                            view: 'NULL'
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '1797663647d648dfb4a2171f7e3904c6'
                        key: {
                            application_file: '880b977d553047c8a4dba827c822d37a'
                            source_artifact: '4206614ffb014358b677135451060339'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1bc35417f98a433fafd9966b8a7e218a'
                        deleted: true
                        key: {
                            sys_security_acl: 'e75b54fb557f4726a56e0fe23949f26e'
                            sys_user_role: {
                                id: '2fd10fe29d354e4f8ffac10eff793cfa'
                                key: {
                                    name: 'x_snc_alfred.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c3a69a98d3f454b97bcfba29d12451e'
                        deleted: true
                        key: {
                            sys_security_acl: '15ca32624bfa48da899c4ba179589576'
                            sys_user_role: {
                                id: '2fd10fe29d354e4f8ffac10eff793cfa'
                                key: {
                                    name: 'x_snc_alfred.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1d1eba25831d4f902a3771647daad308'
                        key: {
                            sys_ui_section: '151e7a25831d4f902a3771647daad3b1'
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1e59e67c57eb4dc5a262bbe540439318'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '21fc8bab586e4253b58a828261eacb67'
                        key: {
                            name: 'x_snc_alfred/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27d5dfdb169643cfa8e9634cd9ca2434'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'work_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '2a1183ba84cd4955b8363b8a6b048583'
                        key: {
                            application_file: 'eddefaf2b53548d9b4503c729414b500'
                            source_artifact: '4206614ffb014358b677135451060339'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '2b4b72a861bc42a8bf981a9f0f24680b'
                        key: {
                            application_file: '21fc8bab586e4253b58a828261eacb67'
                            source_artifact: '4206614ffb014358b677135451060339'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '2fd10fe29d354e4f8ffac10eff793cfa'
                        deleted: true
                        key: {
                            name: 'x_snc_alfred.user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3234aa887b2849648fdb8d8bf585e614'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '33ec62f4161a44a69456cb2908c46a38'
                        deleted: true
                        key: {
                            sys_security_acl: '26e1f4116dc94375871688ee0aee5fde'
                            sys_user_role: {
                                id: '2fd10fe29d354e4f8ffac10eff793cfa'
                                key: {
                                    name: 'x_snc_alfred.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '362f30194a97433ba0ef04d4a2f9e190'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3772a7e70d1c4df2a509b296f8ba8228'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '38322204a2d244e899eb4d31c359a328'
                        deleted: true
                        key: {
                            sys_security_acl: '1ac0f46c72b64a3cadc30836b6fb6635'
                            sys_user_role: {
                                id: '2fd10fe29d354e4f8ffac10eff793cfa'
                                key: {
                                    name: 'x_snc_alfred.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '4206614ffb014358b677135451060339'
                        key: {
                            name: 'x_snc_alfred_dashboard.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4982866552e245889b7673c1ef83c2e6'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e66a9d2e1004b8690bd4e4c62923617'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'work_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '510145b48b9840e6a3a55b274689ccae'
                        key: {
                            sys_ui_section: '151e7a25831d4f902a3771647daad3b1'
                            element: 'work_type'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '511eba25831d4f902a3771647daad308'
                        key: {
                            sys_ui_section: '151e7a25831d4f902a3771647daad3b1'
                            element: 'date'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5400270a549a456dbd62c0e478730263'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'work_type'
                            value: 'external'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '551eba25831d4f902a3771647daad305'
                        key: {
                            sys_ui_section: '151e7a25831d4f902a3771647daad3b1'
                            element: 'notes'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '61f187986bb64448b25f5095b3c116aa'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e32aeafe270465786063557e8c0c762'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'duration_hours'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '880b977d553047c8a4dba827c822d37a'
                        key: {
                            name: 'x_snc_alfred/main.js.map'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '912e4679a8fa4d489e24d02ab67ade97'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92c0b6eda9aa4924855670d2875edf42'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '951eba25831d4f902a3771647daad307'
                        key: {
                            sys_ui_section: '151e7a25831d4f902a3771647daad3b1'
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98494ca7ce5d4107874e3867a68aa631'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '991abaa9be7445b0b2484fe561a5940f'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'work_type'
                            value: 'internal'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '991eba25831d4f902a3771647daad304'
                        key: {
                            sys_ui_section: '151e7a25831d4f902a3771647daad3b1'
                            element: 'duration_hours'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9c86885703d44f6495027d7760cbd9c2'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'work_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ab047c25c8044b4b9d7b20d08da5f55d'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bc21b204395a48c18b36666638c034b6'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'category'
                            value: 'delegate_now'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd51e7a25831d4f902a3771647daad3b8'
                        key: {
                            sys_ui_section: '151e7a25831d4f902a3771647daad3b1'
                            element: 'activity_description'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd91eba25831d4f902a3771647daad306'
                        key: {
                            sys_ui_section: '151e7a25831d4f902a3771647daad3b1'
                            element: 'category'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dfb20d7976e04b9db3c6df7946b5512d'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'activity_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e0be5a5e5d484505a265210e8aea14ac'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'category'
                            value: 'only_me'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8957fef15ad40cbada1824eb8313712'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e966526c44e24ca1a84c52ec6e9477d5'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'category'
                            value: 'delegate_later'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb7559a5c8a84eee9f2eccec4a1b7084'
                        key: {
                            name: 'x_snc_alfred_time_entries'
                            element: 'duration_hours'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'eddefaf2b53548d9b4503c729414b500'
                        key: {
                            endpoint: 'x_snc_alfred_dashboard.do'
                        }
                    },
                ]
            }
        }
    }
}
