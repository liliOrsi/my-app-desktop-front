-------------------------------------
Translated Report (Full Report Below)
-------------------------------------

Process:               Gasto Fácil [2023]
Path:                  /Applications/Gasto Fácil.app/Contents/MacOS/Gasto Fácil
Identifier:            com.gastofacil.desktop
Version:               0.1.1 (0.1.1)
Code Type:             X86-64 (Native)
Parent Process:        launchd [1]
User ID:               501

Date/Time:             2026-05-31 15:24:14.9428 -0300
OS Version:            macOS 15.7.2 (24G325)
Report Version:        12
Bridge OS Version:     10.1 (23P1072)
Anonymous UUID:        77F1CCC9-E394-2572-A5D0-FB57FF802010

Sleep/Wake UUID:       F7BB088D-D286-4A22-8B63-880D36BBD75C

Time Awake Since Boot: 3700 seconds
Time Since Wake:       723 seconds

System Integrity Protection: enabled

Crashed Thread:        0  CrBrowserMain  Dispatch queue: com.apple.main-thread

Exception Type:        EXC_BREAKPOINT (SIGTRAP)
Exception Codes:       0x0000000000000002, 0x0000000000000000

Termination Reason:    Namespace SIGNAL, Code 5 Trace/BPT trap: 5
Terminating Process:   exc handler [2023]

Thread 0 Crashed:: CrBrowserMain Dispatch queue: com.apple.main-thread
0   Electron Framework            	       0x11ae82bbb node::AsyncWrap::~AsyncWrap() + 647003
1   Electron Framework            	       0x11cf4010d ares_llist_node_next + 1961901
2   Electron Framework            	       0x119d93539 node::BaseObject::TransferForMessaging() + 113641
3   Electron Framework            	       0x119d9311c node::BaseObject::TransferForMessaging() + 112588
4   Electron Framework            	       0x11a44a85d v8::ScriptCompiler::ConsumeCodeCacheTask::Run() + 342077
5   Electron Framework            	       0x11a816fbd v8::Exception::CreateMessage(v8::Isolate*, v8::Local<v8::Value>) + 15261
6   Electron Framework            	       0x11a816d45 v8::Exception::CreateMessage(v8::Isolate*, v8::Local<v8::Value>) + 14629
7   Electron Framework            	       0x11a357b71 v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>) + 157089
8   Electron Framework            	       0x11a3579c1 v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>) + 156657
9   Electron Framework            	       0x11cd8e6cb ares_llist_node_next + 185707
10  Electron Framework            	       0x11a33ad4a v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>) + 38778
11  Electron Framework            	       0x11b44793f crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 1277199
12  Electron Framework            	       0x11b4488b8 crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 1281160
13  Electron Framework            	       0x11b448715 crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 1280741
14  Electron Framework            	       0x11a19c8a3 v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&) + 175331
15  Electron Framework            	       0x11a19c0c8 v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&) + 173320
16  Electron Framework            	       0x11ad9631e ElectronMain + 142
17  dyld                          	    0x7ff819fe0530 start + 3056

Thread 1:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 2:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 3:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 4:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 5:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 6:: ThreadPoolServiceThread
0   libsystem_kernel.dylib        	    0x7ff81a34d54a kevent64 + 10
1   Electron Framework            	       0x119dc46be v8::Module::GetUnboundModuleScript() + 97918
2   Electron Framework            	       0x11a2dcf7b node::PrincipalRealm::enhance_fatal_stack_after_inspector() const + 106203
3   Electron Framework            	       0x1195bb11c node::StreamBase::GetFD() + 844
4   Electron Framework            	       0x119a81dc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
5   Electron Framework            	       0x119a81d18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
6   Electron Framework            	       0x119a81cbd v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21357
7   Electron Framework            	       0x11e0e91e4 ares_dns_rr_get_ttl + 3948708
8   Electron Framework            	       0x1192292ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
9   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
10  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 7:: ThreadPoolForegroundWorker Dispatch queue: com.apple.SystemConfiguration.DNSConfiguration
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   libxpc.dylib                  	    0x7ff81a0a3069 _xpc_pipe_mach_msg + 49
5   libxpc.dylib                  	    0x7ff81a0a28cc _xpc_pipe_routine + 384
6   libxpc.dylib                  	    0x7ff81a07f02e _xpc_interface_routine + 173
7   libxpc.dylib                  	    0x7ff81a083d39 _xpc_look_up_endpoint + 231
8   libxpc.dylib                  	    0x7ff81a083bd7 _xpc_connection_bootstrap_look_up_slow + 399
9   libxpc.dylib                  	    0x7ff81a0834be _xpc_connection_init + 800
10  libxpc.dylib                  	    0x7ff81a0830f1 _xpc_connection_activate_if_needed + 570
11  libxpc.dylib                  	    0x7ff81a085627 xpc_connection_resume + 73
12  libsystem_configuration.dylib 	    0x7ff826a541e6 libSC_info_client_create + 221
13  libsystem_configuration.dylib 	    0x7ff826a54091 __dns_configuration_copy_block_invoke + 97
14  libdispatch.dylib             	    0x7ff81a1f09fc _dispatch_client_callout + 6
15  libdispatch.dylib             	    0x7ff81a1e77e6 _dispatch_lane_barrier_sync_invoke_and_complete + 60
16  libsystem_configuration.dylib 	    0x7ff826a53952 dns_configuration_copy + 80
17  libresolv.9.dylib             	    0x7ff82cb3c715 res_9_vinit + 55
18  Electron Framework            	       0x11b562e47 crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 2437655
19  Electron Framework            	       0x11b562ddf crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 2437551
20  Electron Framework            	       0x11b555a0b crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 2383323
21  Electron Framework            	       0x11b5549e6 crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 2379190
22  Electron Framework            	       0x11a28cb68 v8::internal::compiler::CompilationDependencies::DependOnArraySpeciesProtector() + 151880
23  Electron Framework            	       0x11a28caf1 v8::internal::compiler::CompilationDependencies::DependOnArraySpeciesProtector() + 151761
24  Electron Framework            	       0x118a40ac2 v8::String::NewFromOneByte(v8::Isolate*, unsigned char const*, v8::NewStringType, int) + 73458
25  Electron Framework            	       0x118a40a35 v8::String::NewFromOneByte(v8::Isolate*, unsigned char const*, v8::NewStringType, int) + 73317
26  Electron Framework            	       0x11889eea1 v8::SandboxHardwareSupport::InitializeBeforeThreadCreation() + 36385
27  Electron Framework            	       0x11899fd6b v8::internal::compiler::CompilationDependencies::FieldRepresentationDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::Representation) const + 3467
28  Electron Framework            	       0x11899f876 v8::internal::compiler::CompilationDependencies::FieldRepresentationDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::Representation) const + 2198
29  Electron Framework            	       0x11898d56c v8::Value::Uint32Value(v8::Local<v8::Context>) const + 3132
30  Electron Framework            	       0x11898cf1b v8::Value::Uint32Value(v8::Local<v8::Context>) const + 1515
31  Electron Framework            	       0x1196eb41d v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 14157
32  Electron Framework            	       0x1196eb331 v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 13921
33  Electron Framework            	       0x1192292ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
34  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
35  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 8:: ThreadPoolBackgroundWorker
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x118ad98e0 v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 85104
5   Electron Framework            	       0x118ad96bd v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84557
6   Electron Framework            	       0x118ad965d v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84461
7   Electron Framework            	       0x118ad95ed v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84349
8   Electron Framework            	       0x11898ce40 v8::Value::Uint32Value(v8::Local<v8::Context>) const + 1296
9   Electron Framework            	       0x1196eb44d v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 14205
10  Electron Framework            	       0x1196eb35a v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 13962
11  Electron Framework            	       0x1192292ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
12  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
13  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 9:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 10:: ThreadPoolForegroundWorker
0   libsystem_kernel.dylib        	    0x7ff81a345452 __read_nocancel + 10
1   libsystem_c.dylib             	    0x7ff81a231771 _sread + 16
2   libsystem_c.dylib             	    0x7ff81a231720 __srefill1 + 24
3   libsystem_c.dylib             	    0x7ff81a231971 __fread + 419
4   libsystem_c.dylib             	    0x7ff81a23a6d2 fread + 74
5   Electron Framework            	       0x119d17c39 v8::Symbol::GetIterator(v8::Isolate*) + 97145
6   Electron Framework            	       0x119d17a05 v8::Symbol::GetIterator(v8::Isolate*) + 96581
7   Electron Framework            	       0x11b51c5d1 crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 2148769
8   Electron Framework            	       0x11b51be0d crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 2146781
9   Electron Framework            	       0x11b51bf22 crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 2147058
10  Electron Framework            	       0x11b5549e6 crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 2379190
11  Electron Framework            	       0x11a28cb68 v8::internal::compiler::CompilationDependencies::DependOnArraySpeciesProtector() + 151880
12  Electron Framework            	       0x11a28caf1 v8::internal::compiler::CompilationDependencies::DependOnArraySpeciesProtector() + 151761
13  Electron Framework            	       0x118a40ac2 v8::String::NewFromOneByte(v8::Isolate*, unsigned char const*, v8::NewStringType, int) + 73458
14  Electron Framework            	       0x118a40a35 v8::String::NewFromOneByte(v8::Isolate*, unsigned char const*, v8::NewStringType, int) + 73317
15  Electron Framework            	       0x11889eea1 v8::SandboxHardwareSupport::InitializeBeforeThreadCreation() + 36385
16  Electron Framework            	       0x11899fd6b v8::internal::compiler::CompilationDependencies::FieldRepresentationDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::Representation) const + 3467
17  Electron Framework            	       0x11899f876 v8::internal::compiler::CompilationDependencies::FieldRepresentationDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::Representation) const + 2198
18  Electron Framework            	       0x11898d56c v8::Value::Uint32Value(v8::Local<v8::Context>) const + 3132
19  Electron Framework            	       0x11898cf1b v8::Value::Uint32Value(v8::Local<v8::Context>) const + 1515
20  Electron Framework            	       0x1196eb41d v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 14157
21  Electron Framework            	       0x1196eb331 v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 13921
22  Electron Framework            	       0x1192292ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
23  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
24  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 11:: Chrome_IOThread
0   libsystem_kernel.dylib        	    0x7ff81a34d54a kevent64 + 10
1   Electron Framework            	       0x119dc46be v8::Module::GetUnboundModuleScript() + 97918
2   Electron Framework            	       0x11a2dcf7b node::PrincipalRealm::enhance_fatal_stack_after_inspector() const + 106203
3   Electron Framework            	       0x1195bb11c node::StreamBase::GetFD() + 844
4   Electron Framework            	       0x119a81dc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
5   Electron Framework            	       0x119a81d18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
6   Electron Framework            	       0x11a17653f v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&) + 18815
7   Electron Framework            	       0x11e0e91e4 ares_dns_rr_get_ttl + 3948708
8   Electron Framework            	       0x1192292ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
9   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
10  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 12:: MemoryInfra
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x118ad98e0 v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 85104
5   Electron Framework            	       0x118ad96bd v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84557
6   Electron Framework            	       0x1189584d3 v8::CodeEvent::GetScriptName() + 5363
7   Electron Framework            	       0x1189581c5 v8::CodeEvent::GetScriptName() + 4581
8   Electron Framework            	       0x1195bb11c node::StreamBase::GetFD() + 844
9   Electron Framework            	       0x119a81dc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
10  Electron Framework            	       0x119a81d18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
11  Electron Framework            	       0x11e0e91e4 ares_dns_rr_get_ttl + 3948708
12  Electron Framework            	       0x1192292ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
13  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
14  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 13:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 14:
0   libsystem_kernel.dylib        	    0x7ff81a348822 kevent + 10
1   Electron Framework            	       0x11ad959fb uv__io_poll + 1275
2   Electron Framework            	       0x11ad82f45 uv_run + 485
3   Electron Framework            	       0x11b176a40 node::WorkerThreadsTaskRunner::DelayedTaskScheduler::Start()::'lambda'(void*)::__invoke(void*) + 128
4   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
5   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 15:
0   libsystem_kernel.dylib        	    0x7ff81a3466f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff81a3862ae _pthread_cond_wait + 988
2   Electron Framework            	       0x11ad90683 uv_cond_wait + 35
3   Electron Framework            	       0x11b17435c node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel) + 1820
4   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
5   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 16:
0   libsystem_kernel.dylib        	    0x7ff81a3466f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff81a3862ae _pthread_cond_wait + 988
2   Electron Framework            	       0x11ad90683 uv_cond_wait + 35
3   Electron Framework            	       0x11b17435c node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel) + 1820
4   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
5   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 17:
0   libsystem_kernel.dylib        	    0x7ff81a3466f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff81a3862ae _pthread_cond_wait + 988
2   Electron Framework            	       0x11ad90683 uv_cond_wait + 35
3   Electron Framework            	       0x11b17435c node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel) + 1820
4   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
5   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 18:
0   libsystem_kernel.dylib        	    0x7ff81a343ac6 semaphore_wait_trap + 10
1   Electron Framework            	       0x11ad90500 uv_sem_wait + 16
2   Electron Framework            	       0x11b2f3f73 node::inspector::Agent::GetWsUrl() const + 67
3   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
4   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 19:: NetworkConfigWatcher
0   libsystem_kernel.dylib        	    0x7ff81a344eca __sysctl + 10
1   libsystem_c.dylib             	    0x7ff81a22a956 sysctl + 102
2   libsystem_info.dylib          	    0x7ff81a3cbeab getifaddrs + 183
3   libsystem_info.dylib          	    0x7ff81a3cdf3e if_nametoindex + 27
4   Electron Framework            	       0x11a2e5e94 node::PrincipalRealm::enhance_fatal_stack_after_inspector() const + 142836
5   Electron Framework            	       0x11a2e5aa7 node::PrincipalRealm::enhance_fatal_stack_after_inspector() const + 141831
6   Electron Framework            	       0x11a2e5989 node::PrincipalRealm::enhance_fatal_stack_after_inspector() const + 141545
7   Electron Framework            	       0x11a2e5853 node::PrincipalRealm::enhance_fatal_stack_after_inspector() const + 141235
8   Electron Framework            	       0x11ac24971 v8_inspector::String16::String16(char const*) + 726961
9   Electron Framework            	       0x11e0e9135 ares_dns_rr_get_ttl + 3948533
10  Electron Framework            	       0x1192292ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
11  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
12  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 20:
0   libsystem_pthread.dylib       	    0x7ff81a381848 thread_start + 0

Thread 21:
0   libsystem_pthread.dylib       	    0x7ff81a381848 thread_start + 0

Thread 22:
0   libsystem_pthread.dylib       	    0x7ff81a381848 thread_start + 0

Thread 23:
0   libsystem_pthread.dylib       	    0x7ff81a381848 thread_start + 0


Thread 0 crashed with X86 Thread State (64-bit):
  rax: 0x0000000000000000  rbx: 0x0000012c02fb7140  rcx: 0x0000000000000071  rdx: 0x000000000000007c
  rdi: 0x00007ff7b252c3c0  rsi: 0x00007ff7b252c3e0  rbp: 0x00007ff7b252c440  rsp: 0x00007ff7b252c350
   r8: 0x000000000000006e   r9: 0x0000012c00000000  r10: 0x0f0f0f0f0f0f0f0f  r11: 0x00007ecbaf5bb781
  r12: 0x00007ff7b252c3e0  r13: 0xaaaaaaaaaaaaaaaa  r14: 0x0000000000000002  r15: 0x00007ff7b252c358
  rip: 0x000000011ae82bbb  rfl: 0x0000000000000246  cr2: 0x0000000000000000
  
Logical CPU:     2
Error Code:      0x00000000 
Trap Number:     3

Thread 0 instruction stream:
  89 c7 ff 91 08 01 00 00-48 89 c7 e8 b5 bb 05 00  ........H.......
  48 89 c7 e8 cd bb 05 00-84 c0 74 14 48 8d 35 6a  H.........t.H.5j
  dc 64 06 ba 16 00 00 00-48 89 df e8 65 af 53 ff  .d......H...e.S.
  48 8b 7d a0 48 c7 45 a0-00 00 00 00 48 85 ff 74  H.}.H.E.....H..t
  06 48 8b 07 ff 50 08 44-8a 7d c0 41 80 e7 01 e9  .H...P.D.}.A....
  b0 fc ff ff 31 c9 eb 89-0f 0b e8 46 5a f1 ff cc  ....1......FZ...
 [0f]0b 0f 1f 00 55 48 89-e5 41 57 41 56 53 50 48  .....UH..AWAVSPH	<==
  89 fb 48 b8 aa aa aa aa-aa aa aa aa 4c 8d 75 e0  ..H.........L.u.
  49 89 06 4c 89 f7 e8 fa-b6 04 ff 45 31 ff 4c 89  I..L.......E1.L.
  7b 10 0f 57 c0 0f 11 03-49 8b 3e 48 8b 07 48 8d  {..W....I.>H..H.
  35 a3 db 64 06 ba 0e 00-00 00 48 89 d9 ff 50 10  5..d......H...P.
  49 8b 3e 4d 89 3e 48 85-ff 74 06 48 8b 07 ff 50  I.>M.>H..t.H...P

Binary Images:
       0x10d9d2000 -        0x10d9d3fff com.gastofacil.desktop (0.1.1) <4c4c449c-5555-3144-a12c-4139c48fff89> /Applications/Gasto Fácil.app/Contents/MacOS/Gasto Fácil
       0x118847000 -        0x122e77fff com.github.Electron.framework (*) <4c4c446c-5555-3144-a125-6ff9ff1c32a3> /Applications/Gasto Fácil.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Electron Framework
       0x10d9f9000 -        0x10da0dfff com.github.Squirrel (1.0) <4c4c441e-5555-3144-a154-ddfb92285a36> /Applications/Gasto Fácil.app/Contents/Frameworks/Squirrel.framework/Versions/A/Squirrel
       0x10da70000 -        0x10dab3fff com.electron.reactive (3.1.0) <4c4c442a-5555-3144-a10d-2365d9b82e4d> /Applications/Gasto Fácil.app/Contents/Frameworks/ReactiveObjC.framework/Versions/A/ReactiveObjC
       0x10da17000 -        0x10da22fff org.mantle.Mantle (1.0) <4c4c44d6-5555-3144-a14e-916174ccea73> /Applications/Gasto Fácil.app/Contents/Frameworks/Mantle.framework/Versions/A/Mantle
       0x10dd0d000 -        0x10df0ffff libffmpeg.dylib (*) <4c4c4434-5555-3144-a14c-cedbf33f034a> /Applications/Gasto Fácil.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libffmpeg.dylib
       0x11650d000 -        0x116519fff libobjc-trampolines.dylib (*) <72642d3c-0206-38ee-9349-c720aee663ee> /usr/lib/libobjc-trampolines.dylib
    0x7ff819fda000 -     0x7ff81a0746c7 dyld (*) <6b5ca9e7-21aa-36e9-9006-99ad808b943b> /usr/lib/dyld
               0x0 - 0xffffffffffffffff ??? (*) <00000000-0000-0000-0000-000000000000> ???
    0x7ff81a380000 -     0x7ff81a38bfd7 libsystem_pthread.dylib (*) <a031f066-4daa-3801-9155-88106d874835> /usr/lib/system/libsystem_pthread.dylib
    0x7ff81a343000 -     0x7ff81a37fb6f libsystem_kernel.dylib (*) <482d57d2-374a-3244-84d0-d09d58d29b2e> /usr/lib/system/libsystem_kernel.dylib
    0x7ff81a079000 -     0x7ff81a0bfbd5 libxpc.dylib (*) <c2d833c5-89af-3dae-ae71-af61769cab0c> /usr/lib/system/libxpc.dylib
    0x7ff826a53000 -     0x7ff826a568df libsystem_configuration.dylib (*) <c9a0e3a0-375d-3d16-81eb-c5f9b4789f22> /usr/lib/system/libsystem_configuration.dylib
    0x7ff81a1d9000 -     0x7ff81a220339 libdispatch.dylib (*) <6ca6112a-70c8-39a2-8cfa-da2139709d3c> /usr/lib/system/libdispatch.dylib
    0x7ff82cb3c000 -     0x7ff82cb5862f libresolv.9.dylib (*) <86e1a133-a1a2-381d-9f67-2f4938764a0a> /usr/lib/libresolv.9.dylib
    0x7ff81a224000 -     0x7ff81a2acb27 libsystem_c.dylib (*) <0251dd0c-67bc-3a58-a477-5e34d4d54f3e> /usr/lib/system/libsystem_c.dylib
    0x7ff81a3c5000 -     0x7ff81a3f3477 libsystem_info.dylib (*) <cd7c41c5-ce28-3129-9b0e-b8d126b2a0c5> /usr/lib/system/libsystem_info.dylib

External Modification Summary:
  Calls made by other processes targeting this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by all processes on this machine:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0

VM Region Summary:
ReadOnly portion of Libraries: Total=1.4G resident=0K(0%) swapped_out_or_unallocated=1.4G(100%)
Writable regions: Total=1.2G written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=1.2G(100%)

                                VIRTUAL   REGION 
REGION TYPE                        SIZE    COUNT (non-coalesced) 
===========                     =======  ======= 
Activity Tracing                   256K        1 
ColorSync                           12K        2 
CoreGraphics                         4K        1 
Foundation                          16K        1 
Kernel Alloc Once                    8K        1 
MALLOC                           551.2M       29 
MALLOC guard page                   48K       12 
Memory Tag 253                    32.0G      956 
Memory Tag 255                     1.3T       78 
Memory Tag 255 (reserved)          272K        5         reserved VM address space (unallocated)
PROTECTED_MEMORY                     4K        1 
STACK GUARD                       56.1M       24 
Stack                            123.7M       24 
VM_ALLOCATE                        216K        6 
__CTF                               824        1 
__DATA                            34.5M      916 
__DATA_CONST                     106.4M      936 
__DATA_DIRTY                      2588K      342 
__FONT_DATA                        2352        1 
__INFO_FILTER                         8        1 
__LINKEDIT                       163.3M        9 
__OBJC_RO                         61.3M        1 
__OBJC_RW                         2396K        2 
__TEXT                             1.2G      953 
__TPRO_CONST                         16        2 
mapped file                      213.1M       19 
shared memory                     1304K       17 
===========                     =======  ======= 
TOTAL                              1.4T     4341 
TOTAL, minus reserved VM space     1.4T     4341 



-----------
Full Report
-----------

{"app_name":"Gasto Fácil","timestamp":"2026-05-31 15:24:20.00 -0300","app_version":"0.1.1","slice_uuid":"4c4c449c-5555-3144-a12c-4139c48fff89","build_version":"0.1.1","platform":1,"bundleID":"com.gastofacil.desktop","share_with_app_devs":0,"is_first_party":0,"bug_type":"309","os_version":"macOS 15.7.2 (24G325)","roots_installed":0,"name":"Gasto Fácil","incident_id":"F899E743-FB06-4791-9E56-729E851ED502"}
{
  "uptime" : 3700,
  "procRole" : "Foreground",
  "version" : 2,
  "userID" : 501,
  "deployVersion" : 210,
  "modelCode" : "MacBookAir9,1",
  "coalitionID" : 2359,
  "osVersion" : {
    "train" : "macOS 15.7.2",
    "build" : "24G325",
    "releaseType" : "User"
  },
  "captureTime" : "2026-05-31 15:24:14.9428 -0300",
  "codeSigningMonitor" : 0,
  "incident" : "F899E743-FB06-4791-9E56-729E851ED502",
  "pid" : 2023,
  "cpuType" : "X86-64",
  "roots_installed" : 0,
  "bug_type" : "309",
  "procLaunch" : "2026-05-31 15:24:00.9918 -0300",
  "procStartAbsTime" : 3748588495159,
  "procExitAbsTime" : 3762509681064,
  "procName" : "Gasto Fácil",
  "procPath" : "\/Applications\/Gasto Fácil.app\/Contents\/MacOS\/Gasto Fácil",
  "bundleInfo" : {"CFBundleShortVersionString":"0.1.1","CFBundleVersion":"0.1.1","CFBundleIdentifier":"com.gastofacil.desktop"},
  "storeInfo" : {"deviceIdentifierForVendor":"E59A174F-C882-587D-B27D-EEE3A673011A","thirdParty":true},
  "parentProc" : "launchd",
  "parentPid" : 1,
  "coalitionName" : "com.gastofacil.desktop",
  "crashReporterKey" : "77F1CCC9-E394-2572-A5D0-FB57FF802010",
  "appleIntelligenceStatus" : {"state":"unavailable","reasons":["deviceNotCapable"]},
  "codeSigningID" : "",
  "codeSigningTeamID" : "",
  "codeSigningValidationCategory" : 0,
  "codeSigningTrustLevel" : 4294967295,
  "codeSigningAuxiliaryInfo" : 0,
  "bootSessionUUID" : "909BDF01-86D0-4E86-98C9-40776E14C259",
  "wakeTime" : 723,
  "bridgeVersion" : {"build":"23P1072","train":"10.1"},
  "sleepWakeUUID" : "F7BB088D-D286-4A22-8B63-880D36BBD75C",
  "sip" : "enabled",
  "exception" : {"codes":"0x0000000000000002, 0x0000000000000000","rawCodes":[2,0],"type":"EXC_BREAKPOINT","signal":"SIGTRAP"},
  "termination" : {"flags":0,"code":5,"namespace":"SIGNAL","indicator":"Trace\/BPT trap: 5","byProc":"exc handler","byPid":2023},
  "os_fault" : {"process":"Gasto Fácil"},
  "extMods" : {"caller":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"system":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"targeted":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"warnings":0},
  "faultingThread" : 0,
  "threads" : [{"queue":"com.apple.main-thread","instructionState":{"instructionStream":{"bytes":[137,199,255,145,8,1,0,0,72,137,199,232,181,187,5,0,72,137,199,232,205,187,5,0,132,192,116,20,72,141,53,106,220,100,6,186,22,0,0,0,72,137,223,232,101,175,83,255,72,139,125,160,72,199,69,160,0,0,0,0,72,133,255,116,6,72,139,7,255,80,8,68,138,125,192,65,128,231,1,233,176,252,255,255,49,201,235,137,15,11,232,70,90,241,255,204,15,11,15,31,0,85,72,137,229,65,87,65,86,83,80,72,137,251,72,184,170,170,170,170,170,170,170,170,76,141,117,224,73,137,6,76,137,247,232,250,182,4,255,69,49,255,76,137,123,16,15,87,192,15,17,3,73,139,62,72,139,7,72,141,53,163,219,100,6,186,14,0,0,0,72,137,217,255,80,16,73,139,62,77,137,62,72,133,255,116,6,72,139,7,255,80],"offset":96}},"frames":[{"imageOffset":40090555,"symbol":"node::AsyncWrap::~AsyncWrap()","symbolLocation":647003,"imageIndex":1},{"imageOffset":74420493,"symbol":"ares_llist_node_next","symbolLocation":1961901,"imageIndex":1},{"imageOffset":22332729,"symbol":"node::BaseObject::TransferForMessaging()","symbolLocation":113641,"imageIndex":1},{"imageOffset":22331676,"symbol":"node::BaseObject::TransferForMessaging()","symbolLocation":112588,"imageIndex":1},{"imageOffset":29374557,"symbol":"v8::ScriptCompiler::ConsumeCodeCacheTask::Run()","symbolLocation":342077,"imageIndex":1},{"imageOffset":33357757,"symbol":"v8::Exception::CreateMessage(v8::Isolate*, v8::Local<v8::Value>)","symbolLocation":15261,"imageIndex":1},{"imageOffset":33357125,"symbol":"v8::Exception::CreateMessage(v8::Isolate*, v8::Local<v8::Value>)","symbolLocation":14629,"imageIndex":1},{"imageOffset":28380017,"symbol":"v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>)","symbolLocation":157089,"imageIndex":1},{"imageOffset":28379585,"symbol":"v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>)","symbolLocation":156657,"imageIndex":1},{"imageOffset":72644299,"symbol":"ares_llist_node_next","symbolLocation":185707,"imageIndex":1},{"imageOffset":28261706,"symbol":"v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>)","symbolLocation":38778,"imageIndex":1},{"imageOffset":46139711,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":1277199,"imageIndex":1},{"imageOffset":46143672,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":1281160,"imageIndex":1},{"imageOffset":46143253,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":1280741,"imageIndex":1},{"imageOffset":26564771,"symbol":"v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&)","symbolLocation":175331,"imageIndex":1},{"imageOffset":26562760,"symbol":"v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&)","symbolLocation":173320,"imageIndex":1},{"imageOffset":39121694,"symbol":"ElectronMain","symbolLocation":142,"imageIndex":1},{"imageOffset":25904,"symbol":"start","symbolLocation":3056,"imageIndex":7}],"id":62233,"triggered":true,"threadState":{"r13":{"value":12297829382473034410},"rax":{"value":0},"rflags":{"value":582},"cpu":{"value":2},"r14":{"value":2},"rsi":{"value":140701825418208},"r8":{"value":110},"cr2":{"value":0},"rdx":{"value":124},"r10":{"value":1085102592571150095},"r9":{"value":1288490188800},"r15":{"value":140701825418072},"rbx":{"value":1288540221760},"trap":{"value":3},"err":{"value":0},"r11":{"value":139413285484417},"rip":{"value":4746390459,"matchesCrashFrame":1},"rbp":{"value":140701825418304},"rsp":{"value":140701825418064},"r12":{"value":140701825418208},"rcx":{"value":113},"flavor":"x86_THREAD_STATE","rdi":{"value":140701825418176}},"name":"CrBrowserMain"},{"id":62425,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":4611},"r8":{"value":409603},"cr2":{"value":0},"rdx":{"value":123145412005888},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":123145412530176},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145412530176},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145412530176}}},{"id":62426,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":10499},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145412542464},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145413065592},"rbx":{"value":123145413066752},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145413066752},"r12":{"value":5193734},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145413066752}}},{"id":62428,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":10243},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145413079040},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145413602168},"rbx":{"value":123145413603328},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145413603328},"r12":{"value":5193733},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145413603328}}},{"id":62502,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":31747},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145413615616},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145414138752},"rbx":{"value":123145414139904},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145414139904},"r12":{"value":1982472},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145414139904}}},{"id":62517,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":43011},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145414152192},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145414675320},"rbx":{"value":123145414676480},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145414676480},"r12":{"value":5193734},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145414676480}}},{"id":62519,"name":"ThreadPoolServiceThread","threadState":{"r13":{"value":0},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1271310878720},"rsi":{"value":0},"r8":{"value":4},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":1288491108224},"r9":{"value":0},"r15":{"value":0},"rbx":{"value":1271311332976},"trap":{"value":133},"err":{"value":33554801},"r11":{"value":582},"rip":{"value":140703568287050},"rbp":{"value":123145423613328},"rsp":{"value":123145423613144},"r12":{"value":2147483648},"rcx":{"value":123145423613144},"flavor":"x86_THREAD_STATE","rdi":{"value":5}},"frames":[{"imageOffset":42314,"symbol":"kevent64","symbolLocation":10,"imageIndex":10},{"imageOffset":22533822,"symbol":"v8::Module::GetUnboundModuleScript()","symbolLocation":97918,"imageIndex":1},{"imageOffset":27877243,"symbol":"node::PrincipalRealm::enhance_fatal_stack_after_inspector() const","symbolLocation":106203,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":19115197,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21357,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"threadState":{"r13":{"value":17231331847},"rax":{"value":0},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":195725954646016},"rsi":{"value":17231331847},"r8":{"value":4611689471581101059},"cr2":{"value":0},"rdx":{"value":841814840595},"r10":{"value":195725954653699},"r9":{"value":195725954646016},"r15":{"value":196},"rbx":{"value":1288491232600},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145432008944},"rsp":{"value":123145432008840},"r12":{"value":195725954653699},"rcx":{"value":123145432008840},"flavor":"x86_THREAD_STATE","rdi":{"value":1288491232600}},"id":62520,"name":"ThreadPoolForegroundWorker","queue":"com.apple.SystemConfiguration.DNSConfiguration","frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":10},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":10},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":10},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":10},{"imageOffset":172137,"symbol":"_xpc_pipe_mach_msg","symbolLocation":49,"imageIndex":11},{"imageOffset":170188,"symbol":"_xpc_pipe_routine","symbolLocation":384,"imageIndex":11},{"imageOffset":24622,"symbol":"_xpc_interface_routine","symbolLocation":173,"imageIndex":11},{"imageOffset":44345,"symbol":"_xpc_look_up_endpoint","symbolLocation":231,"imageIndex":11},{"imageOffset":43991,"symbol":"_xpc_connection_bootstrap_look_up_slow","symbolLocation":399,"imageIndex":11},{"imageOffset":42174,"symbol":"_xpc_connection_init","symbolLocation":800,"imageIndex":11},{"imageOffset":41201,"symbol":"_xpc_connection_activate_if_needed","symbolLocation":570,"imageIndex":11},{"imageOffset":50727,"symbol":"xpc_connection_resume","symbolLocation":73,"imageIndex":11},{"imageOffset":4582,"symbol":"libSC_info_client_create","symbolLocation":221,"imageIndex":12},{"imageOffset":4241,"symbol":"__dns_configuration_copy_block_invoke","symbolLocation":97,"imageIndex":12},{"imageOffset":96764,"symbol":"_dispatch_client_callout","symbolLocation":6,"imageIndex":13},{"imageOffset":59366,"symbol":"_dispatch_lane_barrier_sync_invoke_and_complete","symbolLocation":60,"imageIndex":13},{"imageOffset":2386,"symbol":"dns_configuration_copy","symbolLocation":80,"imageIndex":12},{"imageOffset":1813,"symbol":"res_9_vinit","symbolLocation":55,"imageIndex":14},{"imageOffset":47300167,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":2437655,"imageIndex":1},{"imageOffset":47300063,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":2437551,"imageIndex":1},{"imageOffset":47245835,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":2383323,"imageIndex":1},{"imageOffset":47241702,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":2379190,"imageIndex":1},{"imageOffset":27548520,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnArraySpeciesProtector()","symbolLocation":151880,"imageIndex":1},{"imageOffset":27548401,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnArraySpeciesProtector()","symbolLocation":151761,"imageIndex":1},{"imageOffset":2071234,"symbol":"v8::String::NewFromOneByte(v8::Isolate*, unsigned char const*, v8::NewStringType, int)","symbolLocation":73458,"imageIndex":1},{"imageOffset":2071093,"symbol":"v8::String::NewFromOneByte(v8::Isolate*, unsigned char const*, v8::NewStringType, int)","symbolLocation":73317,"imageIndex":1},{"imageOffset":360097,"symbol":"v8::SandboxHardwareSupport::InitializeBeforeThreadCreation()","symbolLocation":36385,"imageIndex":1},{"imageOffset":1412459,"symbol":"v8::internal::compiler::CompilationDependencies::FieldRepresentationDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::Representation) const","symbolLocation":3467,"imageIndex":1},{"imageOffset":1411190,"symbol":"v8::internal::compiler::CompilationDependencies::FieldRepresentationDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::Representation) const","symbolLocation":2198,"imageIndex":1},{"imageOffset":1336684,"symbol":"v8::Value::Uint32Value(v8::Local<v8::Context>) const","symbolLocation":3132,"imageIndex":1},{"imageOffset":1335067,"symbol":"v8::Value::Uint32Value(v8::Local<v8::Context>) const","symbolLocation":1515,"imageIndex":1},{"imageOffset":15352861,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":14157,"imageIndex":1},{"imageOffset":15352625,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":13921,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":62521,"name":"ThreadPoolBackgroundWorker","threadState":{"r13":{"value":17179869442},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":117660629073920},"rsi":{"value":17179869442},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":117660629073920},"r9":{"value":117660629073920},"r15":{"value":32},"rbx":{"value":123145440414992},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145440414320},"rsp":{"value":123145440414216},"r12":{"value":117660629073920},"rcx":{"value":123145440414216},"flavor":"x86_THREAD_STATE","rdi":{"value":123145440414992}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":10},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":10},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":10},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":10},{"imageOffset":2697440,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":85104,"imageIndex":1},{"imageOffset":2696893,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84557,"imageIndex":1},{"imageOffset":2696797,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84461,"imageIndex":1},{"imageOffset":2696685,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84349,"imageIndex":1},{"imageOffset":1334848,"symbol":"v8::Value::Uint32Value(v8::Local<v8::Context>) const","symbolLocation":1296,"imageIndex":1},{"imageOffset":15352909,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":14205,"imageIndex":1},{"imageOffset":15352666,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":13962,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":62522,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":0},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":0},"r8":{"value":278532},"cr2":{"value":0},"rdx":{"value":123145440428032},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":0},"err":{"value":0},"r11":{"value":0},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145440952320},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145440952320}}},{"id":62523,"name":"ThreadPoolForegroundWorker","threadState":{"r13":{"value":1288490310432},"rax":{"value":213},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":214},"rsi":{"value":1288536208896},"r8":{"value":62523},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":5252},"r9":{"value":8},"r15":{"value":1288536208896},"rbx":{"value":140704669518256,"symbolLocation":0,"symbol":"usual"},"trap":{"value":133},"err":{"value":33554828},"r11":{"value":514},"rip":{"value":140703568254034},"rbp":{"value":123145449350288},"rsp":{"value":123145449350264},"r12":{"value":140704669518256,"symbolLocation":0,"symbol":"usual"},"rcx":{"value":123145449350264},"flavor":"x86_THREAD_STATE","rdi":{"value":33}},"frames":[{"imageOffset":9298,"symbol":"__read_nocancel","symbolLocation":10,"imageIndex":10},{"imageOffset":55153,"symbol":"_sread","symbolLocation":16,"imageIndex":15},{"imageOffset":55072,"symbol":"__srefill1","symbolLocation":24,"imageIndex":15},{"imageOffset":55665,"symbol":"__fread","symbolLocation":419,"imageIndex":15},{"imageOffset":91858,"symbol":"fread","symbolLocation":74,"imageIndex":15},{"imageOffset":21826617,"symbol":"v8::Symbol::GetIterator(v8::Isolate*)","symbolLocation":97145,"imageIndex":1},{"imageOffset":21826053,"symbol":"v8::Symbol::GetIterator(v8::Isolate*)","symbolLocation":96581,"imageIndex":1},{"imageOffset":47011281,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":2148769,"imageIndex":1},{"imageOffset":47009293,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":2146781,"imageIndex":1},{"imageOffset":47009570,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":2147058,"imageIndex":1},{"imageOffset":47241702,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":2379190,"imageIndex":1},{"imageOffset":27548520,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnArraySpeciesProtector()","symbolLocation":151880,"imageIndex":1},{"imageOffset":27548401,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnArraySpeciesProtector()","symbolLocation":151761,"imageIndex":1},{"imageOffset":2071234,"symbol":"v8::String::NewFromOneByte(v8::Isolate*, unsigned char const*, v8::NewStringType, int)","symbolLocation":73458,"imageIndex":1},{"imageOffset":2071093,"symbol":"v8::String::NewFromOneByte(v8::Isolate*, unsigned char const*, v8::NewStringType, int)","symbolLocation":73317,"imageIndex":1},{"imageOffset":360097,"symbol":"v8::SandboxHardwareSupport::InitializeBeforeThreadCreation()","symbolLocation":36385,"imageIndex":1},{"imageOffset":1412459,"symbol":"v8::internal::compiler::CompilationDependencies::FieldRepresentationDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::Representation) const","symbolLocation":3467,"imageIndex":1},{"imageOffset":1411190,"symbol":"v8::internal::compiler::CompilationDependencies::FieldRepresentationDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::Representation) const","symbolLocation":2198,"imageIndex":1},{"imageOffset":1336684,"symbol":"v8::Value::Uint32Value(v8::Local<v8::Context>) const","symbolLocation":3132,"imageIndex":1},{"imageOffset":1335067,"symbol":"v8::Value::Uint32Value(v8::Local<v8::Context>) const","symbolLocation":1515,"imageIndex":1},{"imageOffset":15352861,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":14157,"imageIndex":1},{"imageOffset":15352625,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":13921,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":62524,"name":"Chrome_IOThread","threadState":{"r13":{"value":0},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1288490811392},"rsi":{"value":0},"r8":{"value":1},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":1288490451264},"r9":{"value":0},"r15":{"value":0},"rbx":{"value":1271311325296},"trap":{"value":133},"err":{"value":33554801},"r11":{"value":582},"rip":{"value":140703568287050},"rbp":{"value":123145457753456},"rsp":{"value":123145457753272},"r12":{"value":2147483648},"rcx":{"value":123145457753272},"flavor":"x86_THREAD_STATE","rdi":{"value":6}},"frames":[{"imageOffset":42314,"symbol":"kevent64","symbolLocation":10,"imageIndex":10},{"imageOffset":22533822,"symbol":"v8::Module::GetUnboundModuleScript()","symbolLocation":97918,"imageIndex":1},{"imageOffset":27877243,"symbol":"node::PrincipalRealm::enhance_fatal_stack_after_inspector() const","symbolLocation":106203,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":26408255,"symbol":"v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&)","symbolLocation":18815,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":62525,"name":"MemoryInfra","threadState":{"r13":{"value":17179869186},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":152845001162752},"rsi":{"value":17179869186},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":152845001162752},"r9":{"value":152845001162752},"r15":{"value":32},"rbx":{"value":123145466154064},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145466153392},"rsp":{"value":123145466153288},"r12":{"value":152845001162752},"rcx":{"value":123145466153288},"flavor":"x86_THREAD_STATE","rdi":{"value":123145466154064}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":10},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":10},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":10},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":10},{"imageOffset":2697440,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":85104,"imageIndex":1},{"imageOffset":2696893,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84557,"imageIndex":1},{"imageOffset":1119443,"symbol":"v8::CodeEvent::GetScriptName()","symbolLocation":5363,"imageIndex":1},{"imageOffset":1118661,"symbol":"v8::CodeEvent::GetScriptName()","symbolLocation":4581,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":62526,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":0},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":0},"r8":{"value":278532},"cr2":{"value":0},"rdx":{"value":123145414688768},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":0},"err":{"value":0},"r11":{"value":0},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145415213056},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145415213056}}},{"id":62527,"frames":[{"imageOffset":22562,"symbol":"kevent","symbolLocation":10,"imageIndex":10},{"imageOffset":39119355,"symbol":"uv__io_poll","symbolLocation":1275,"imageIndex":1},{"imageOffset":39042885,"symbol":"uv_run","symbolLocation":485,"imageIndex":1},{"imageOffset":43186752,"symbol":"node::WorkerThreadsTaskRunner::DelayedTaskScheduler::Start()::'lambda'(void*)::__invoke(void*)","symbolLocation":128,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}],"threadState":{"r13":{"value":4294967295},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":123145474522864},"r8":{"value":1024},"cr2":{"value":0},"rdx":{"value":1},"r10":{"value":123145474522864},"r9":{"value":0},"r15":{"value":1288492452096},"rbx":{"value":0},"trap":{"value":133},"err":{"value":33554795},"r11":{"value":582},"rip":{"value":140703568267298},"rbp":{"value":123145474555680},"rsp":{"value":123145474522712},"r12":{"value":1288492451560},"rcx":{"value":123145474522712},"flavor":"x86_THREAD_STATE","rdi":{"value":15}}},{"id":62528,"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":10},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":9},{"imageOffset":39097987,"symbol":"uv_cond_wait","symbolLocation":35,"imageIndex":1},{"imageOffset":43176796,"symbol":"node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel)","symbolLocation":1820,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}],"threadState":{"r13":{"value":19791209305344},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1288491500472},"rsi":{"value":19791209305344},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":4608},"r10":{"value":0},"r9":{"value":160},"r15":{"value":4608},"rbx":{"value":123145482956800},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":140703568258806},"rbp":{"value":123145482956608},"rsp":{"value":123145482956456},"r12":{"value":123145482956480},"rcx":{"value":123145482956456},"flavor":"x86_THREAD_STATE","rdi":{"value":1288491500472}}},{"id":62529,"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":10},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":9},{"imageOffset":39097987,"symbol":"uv_cond_wait","symbolLocation":35,"imageIndex":1},{"imageOffset":43176796,"symbol":"node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel)","symbolLocation":1820,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}],"threadState":{"r13":{"value":20890720933376},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1288491500472},"rsi":{"value":20890720933376},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":4864},"r10":{"value":0},"r9":{"value":160},"r15":{"value":4864},"rbx":{"value":123145491357696},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":140703568258806},"rbp":{"value":123145491357504},"rsp":{"value":123145491357352},"r12":{"value":123145491357376},"rcx":{"value":123145491357352},"flavor":"x86_THREAD_STATE","rdi":{"value":1288491500472}}},{"id":62530,"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":10},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":9},{"imageOffset":39097987,"symbol":"uv_cond_wait","symbolLocation":35,"imageIndex":1},{"imageOffset":43176796,"symbol":"node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel)","symbolLocation":1820,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}],"threadState":{"r13":{"value":21990232561408},"rax":{"value":260},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1288491500472},"rsi":{"value":21990232561408},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":5120},"r10":{"value":0},"r9":{"value":160},"r15":{"value":5120},"rbx":{"value":123145499758592},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":140703568258806},"rbp":{"value":123145499758400},"rsp":{"value":123145499758248},"r12":{"value":123145499758272},"rcx":{"value":123145499758248},"flavor":"x86_THREAD_STATE","rdi":{"value":1288491500472}}},{"id":62537,"frames":[{"imageOffset":2758,"symbol":"semaphore_wait_trap","symbolLocation":10,"imageIndex":10},{"imageOffset":39097600,"symbol":"uv_sem_wait","symbolLocation":16,"imageIndex":1},{"imageOffset":44748659,"symbol":"node::inspector::Agent::GetWsUrl() const","symbolLocation":67,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":14},"rflags":{"value":582},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":36611},"r8":{"value":123145499803648},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":36612},"r9":{"value":419432703},"r15":{"value":0},"rbx":{"value":4887438964},"trap":{"value":133},"err":{"value":16777252},"r11":{"value":582},"rip":{"value":140703568247494},"rbp":{"value":123145499803536},"rsp":{"value":123145499803512},"r12":{"value":0},"rcx":{"value":123145499803512},"flavor":"x86_THREAD_STATE","rdi":{"value":41475}}},{"id":62553,"name":"NetworkConfigWatcher","threadState":{"r13":{"value":123145508203136},"rax":{"value":0},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":1288495682560},"rsi":{"value":6},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":123145508202880},"r9":{"value":0},"r15":{"value":123145508202880},"rbx":{"value":123145508203016},"trap":{"value":133},"err":{"value":33554634},"r11":{"value":518},"rip":{"value":140703568252618},"rbp":{"value":123145508202816},"rsp":{"value":123145508202808},"r12":{"value":123145508202912},"rcx":{"value":123145508202808},"flavor":"x86_THREAD_STATE","rdi":{"value":123145508202912}},"frames":[{"imageOffset":7882,"symbol":"__sysctl","symbolLocation":10,"imageIndex":10},{"imageOffset":26966,"symbol":"sysctl","symbolLocation":102,"imageIndex":15},{"imageOffset":28331,"symbol":"getifaddrs","symbolLocation":183,"imageIndex":16},{"imageOffset":36670,"symbol":"if_nametoindex","symbolLocation":27,"imageIndex":16},{"imageOffset":27913876,"symbol":"node::PrincipalRealm::enhance_fatal_stack_after_inspector() const","symbolLocation":142836,"imageIndex":1},{"imageOffset":27912871,"symbol":"node::PrincipalRealm::enhance_fatal_stack_after_inspector() const","symbolLocation":141831,"imageIndex":1},{"imageOffset":27912585,"symbol":"node::PrincipalRealm::enhance_fatal_stack_after_inspector() const","symbolLocation":141545,"imageIndex":1},{"imageOffset":27912275,"symbol":"node::PrincipalRealm::enhance_fatal_stack_after_inspector() const","symbolLocation":141235,"imageIndex":1},{"imageOffset":37607793,"symbol":"v8_inspector::String16::String16(char const*)","symbolLocation":726961,"imageIndex":1},{"imageOffset":92938549,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948533,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":62554,"frames":[{"imageOffset":6216,"symbol":"thread_start","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":0},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":37891},"r8":{"value":123145508233216},"cr2":{"value":0},"rdx":{"value":4716663360,"symbolLocation":175168,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)"},"r10":{"value":0},"r9":{"value":419432703},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":0},"err":{"value":0},"r11":{"value":0},"rip":{"value":140703568500808},"rbp":{"value":0},"rsp":{"value":123145508233216},"r12":{"value":0},"rcx":{"value":1288496326528},"flavor":"x86_THREAD_STATE","rdi":{"value":123145508233216}}},{"id":62555,"frames":[{"imageOffset":6216,"symbol":"thread_start","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":0},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":65283},"r8":{"value":123145516634112},"cr2":{"value":0},"rdx":{"value":4716663360,"symbolLocation":175168,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)"},"r10":{"value":0},"r9":{"value":419432703},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":0},"err":{"value":0},"r11":{"value":0},"rip":{"value":140703568500808},"rbp":{"value":0},"rsp":{"value":123145516634112},"r12":{"value":0},"rcx":{"value":1288496327360},"flavor":"x86_THREAD_STATE","rdi":{"value":123145516634112}}},{"id":62556,"frames":[{"imageOffset":6216,"symbol":"thread_start","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":0},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":44035},"r8":{"value":123145525035008},"cr2":{"value":0},"rdx":{"value":4716663360,"symbolLocation":175168,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)"},"r10":{"value":0},"r9":{"value":419432703},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":0},"err":{"value":0},"r11":{"value":0},"rip":{"value":140703568500808},"rbp":{"value":0},"rsp":{"value":123145525035008},"r12":{"value":0},"rcx":{"value":1288496329184},"flavor":"x86_THREAD_STATE","rdi":{"value":123145525035008}}},{"id":62557,"frames":[{"imageOffset":6216,"symbol":"thread_start","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":0},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":44547},"r8":{"value":123145533435904},"cr2":{"value":0},"rdx":{"value":4716663360,"symbolLocation":175168,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)"},"r10":{"value":0},"r9":{"value":419432703},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":0},"err":{"value":0},"r11":{"value":0},"rip":{"value":140703568500808},"rbp":{"value":0},"rsp":{"value":123145533435904},"r12":{"value":0},"rcx":{"value":1288496328352},"flavor":"x86_THREAD_STATE","rdi":{"value":123145533435904}}}],
  "usedImages" : [
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4523368448,
    "CFBundleShortVersionString" : "0.1.1",
    "CFBundleIdentifier" : "com.gastofacil.desktop",
    "size" : 8192,
    "uuid" : "4c4c449c-5555-3144-a12c-4139c48fff89",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/MacOS\/Gasto Fácil",
    "name" : "Gasto Fácil",
    "CFBundleVersion" : "0.1.1"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4706299904,
    "CFBundleIdentifier" : "com.github.Electron.framework",
    "size" : 174264320,
    "uuid" : "4c4c446c-5555-3144-a125-6ff9ff1c32a3",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/Electron Framework.framework\/Versions\/A\/Electron Framework",
    "name" : "Electron Framework",
    "CFBundleVersion" : "35.7.5"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4523528192,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.github.Squirrel",
    "size" : 86016,
    "uuid" : "4c4c441e-5555-3144-a154-ddfb92285a36",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/Squirrel.framework\/Versions\/A\/Squirrel",
    "name" : "Squirrel",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4524015616,
    "CFBundleShortVersionString" : "3.1.0",
    "CFBundleIdentifier" : "com.electron.reactive",
    "size" : 278528,
    "uuid" : "4c4c442a-5555-3144-a10d-2365d9b82e4d",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/ReactiveObjC.framework\/Versions\/A\/ReactiveObjC",
    "name" : "ReactiveObjC",
    "CFBundleVersion" : "0.0.0"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4523651072,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "org.mantle.Mantle",
    "size" : 49152,
    "uuid" : "4c4c44d6-5555-3144-a14e-916174ccea73",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/Mantle.framework\/Versions\/A\/Mantle",
    "name" : "Mantle",
    "CFBundleVersion" : "0.0.0"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4526755840,
    "size" : 2109440,
    "uuid" : "4c4c4434-5555-3144-a14c-cedbf33f034a",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/Electron Framework.framework\/Versions\/A\/Libraries\/libffmpeg.dylib",
    "name" : "libffmpeg.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64h",
    "base" : 4669362176,
    "size" : 53248,
    "uuid" : "72642d3c-0206-38ee-9349-c720aee663ee",
    "path" : "\/usr\/lib\/libobjc-trampolines.dylib",
    "name" : "libobjc-trampolines.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703564668928,
    "size" : 632520,
    "uuid" : "6b5ca9e7-21aa-36e9-9006-99ad808b943b",
    "path" : "\/usr\/lib\/dyld",
    "name" : "dyld"
  },
  {
    "size" : 0,
    "source" : "A",
    "base" : 0,
    "uuid" : "00000000-0000-0000-0000-000000000000"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703568494592,
    "size" : 49112,
    "uuid" : "a031f066-4daa-3801-9155-88106d874835",
    "path" : "\/usr\/lib\/system\/libsystem_pthread.dylib",
    "name" : "libsystem_pthread.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703568244736,
    "size" : 248688,
    "uuid" : "482d57d2-374a-3244-84d0-d09d58d29b2e",
    "path" : "\/usr\/lib\/system\/libsystem_kernel.dylib",
    "name" : "libsystem_kernel.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703565320192,
    "size" : 289750,
    "uuid" : "c2d833c5-89af-3dae-ae71-af61769cab0c",
    "path" : "\/usr\/lib\/system\/libxpc.dylib",
    "name" : "libxpc.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703776976896,
    "size" : 14560,
    "uuid" : "c9a0e3a0-375d-3d16-81eb-c5f9b4789f22",
    "path" : "\/usr\/lib\/system\/libsystem_configuration.dylib",
    "name" : "libsystem_configuration.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703566761984,
    "size" : 291642,
    "uuid" : "6ca6112a-70c8-39a2-8cfa-da2139709d3c",
    "path" : "\/usr\/lib\/system\/libdispatch.dylib",
    "name" : "libdispatch.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703878594560,
    "size" : 116272,
    "uuid" : "86e1a133-a1a2-381d-9f67-2f4938764a0a",
    "path" : "\/usr\/lib\/libresolv.9.dylib",
    "name" : "libresolv.9.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703567069184,
    "size" : 559912,
    "uuid" : "0251dd0c-67bc-3a58-a477-5e34d4d54f3e",
    "path" : "\/usr\/lib\/system\/libsystem_c.dylib",
    "name" : "libsystem_c.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703568777216,
    "size" : 189560,
    "uuid" : "cd7c41c5-ce28-3129-9b0e-b8d126b2a0c5",
    "path" : "\/usr\/lib\/system\/libsystem_info.dylib",
    "name" : "libsystem_info.dylib"
  }
],
  "sharedCache" : {
  "base" : 140703536193536,
  "size" : 30064771072,
  "uuid" : "38dc59c5-c114-3b57-8e82-052011a8da76"
},
  "vmSummary" : "ReadOnly portion of Libraries: Total=1.4G resident=0K(0%) swapped_out_or_unallocated=1.4G(100%)\nWritable regions: Total=1.2G written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=1.2G(100%)\n\n                                VIRTUAL   REGION \nREGION TYPE                        SIZE    COUNT (non-coalesced) \n===========                     =======  ======= \nActivity Tracing                   256K        1 \nColorSync                           12K        2 \nCoreGraphics                         4K        1 \nFoundation                          16K        1 \nKernel Alloc Once                    8K        1 \nMALLOC                           551.2M       29 \nMALLOC guard page                   48K       12 \nMemory Tag 253                    32.0G      956 \nMemory Tag 255                     1.3T       78 \nMemory Tag 255 (reserved)          272K        5         reserved VM address space (unallocated)\nPROTECTED_MEMORY                     4K        1 \nSTACK GUARD                       56.1M       24 \nStack                            123.7M       24 \nVM_ALLOCATE                        216K        6 \n__CTF                               824        1 \n__DATA                            34.5M      916 \n__DATA_CONST                     106.4M      936 \n__DATA_DIRTY                      2588K      342 \n__FONT_DATA                        2352        1 \n__INFO_FILTER                         8        1 \n__LINKEDIT                       163.3M        9 \n__OBJC_RO                         61.3M        1 \n__OBJC_RW                         2396K        2 \n__TEXT                             1.2G      953 \n__TPRO_CONST                         16        2 \nmapped file                      213.1M       19 \nshared memory                     1304K       17 \n===========                     =======  ======= \nTOTAL                              1.4T     4341 \nTOTAL, minus reserved VM space     1.4T     4341 \n",
  "legacyInfo" : {
  "threadTriggered" : {
    "name" : "CrBrowserMain",
    "queue" : "com.apple.main-thread"
  }
},
  "logWritingSignature" : "58567a1537cc68bfb8da85af69061ada7d6fff52",
  "trialInfo" : {
  "rollouts" : [
    {
      "rolloutId" : "670e9bd77a111748a97092a1",
      "factorPackIds" : {
        "SIRI_TTS_DEVICE_TRAINING" : "67d07fb744f1a3655d87002b"
      },
      "deploymentId" : 240000016
    },
    {
      "rolloutId" : "6434420a89ec2e0a7a38bf5a",
      "factorPackIds" : {

      },
      "deploymentId" : 240000011
    }
  ],
  "experiments" : [

  ]
}
}

Model: MacBookAir9,1, BootROM 2094.40.1.0.0 (iBridge: 23.16.11072.0.0,0), 2 processors, Dual-Core Intel Core i3, 1,1 GHz, 8 GB, SMC 
Graphics: Intel Iris Plus Graphics, Intel Iris Plus Graphics, Built-In
Display: Color LCD, 2560 x 1600 Retina, Main, MirrorOff, Online
Memory Module: BANK 0/ChannelA-DIMM0, 4 GB, LPDDR4X, 3733 MHz, Samsung, K3UH5H50MM-JGCJ
Memory Module: BANK 2/ChannelB-DIMM0, 4 GB, LPDDR4X, 3733 MHz, Samsung, K3UH5H50MM-JGCJ
AirPort: spairport_wireless_card_type_wifi (0x14E4, 0x870), wl0: Jul 26 2024 20:45:01 version 16.20.380.0.3.6.130 FWID 01-c866e60e
AirPort: 
Bluetooth: Version (null), 0 services, 0 devices, 0 incoming serial ports
Network Service: Wi-Fi, AirPort, en0
USB Device: USB31Bus
USB Device: USB31Bus
USB Device: T2Bus
USB Device: Touch Bar Backlight
USB Device: Apple Internal Keyboard / Trackpad
USB Device: Headset
USB Device: Ambient Light Sensor
USB Device: FaceTime HD Camera (Built-in)
USB Device: Apple T2 Controller
Thunderbolt Bus: MacBook Air, Apple Inc., 86.0
