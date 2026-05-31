-------------------------------------
Translated Report (Full Report Below)
-------------------------------------

Process:               Gasto Fácil [2277]
Path:                  /Applications/Gasto Fácil.app/Contents/MacOS/Gasto Fácil
Identifier:            com.gastofacil.desktop
Version:               0.1.1 (0.1.1)
Code Type:             X86-64 (Native)
Parent Process:        launchd [1]
User ID:               501

Date/Time:             2026-05-31 15:44:53.4127 -0300
OS Version:            macOS 15.7.2 (24G325)
Report Version:        12
Bridge OS Version:     10.1 (23P1072)
Anonymous UUID:        77F1CCC9-E394-2572-A5D0-FB57FF802010

Sleep/Wake UUID:       F7BB088D-D286-4A22-8B63-880D36BBD75C

Time Awake Since Boot: 5000 seconds
Time Since Wake:       1961 seconds

System Integrity Protection: enabled

Crashed Thread:        0  CrBrowserMain  Dispatch queue: com.apple.main-thread

Exception Type:        EXC_BREAKPOINT (SIGTRAP)
Exception Codes:       0x0000000000000002, 0x0000000000000000

Termination Reason:    Namespace SIGNAL, Code 5 Trace/BPT trap: 5
Terminating Process:   exc handler [2277]

Thread 0 Crashed:: CrBrowserMain Dispatch queue: com.apple.main-thread
0   Electron Framework            	       0x11050bbbb node::AsyncWrap::~AsyncWrap() + 647003
1   Electron Framework            	       0x11240c94a ares_llist_node_next + 141290
2   Electron Framework            	       0x10fb04f67 v8::Isolate::GetHeapSpaceStatistics(v8::HeapSpaceStatistics*, unsigned long) + 79239
3   Electron Framework            	       0x10fb04aa9 v8::Isolate::GetHeapSpaceStatistics(v8::HeapSpaceStatistics*, unsigned long) + 78025
4   Electron Framework            	       0x10f56dc19 node::CustomBufferJSListener::OnStreamAlloc(unsigned long) + 99913
5   Electron Framework            	       0x10f56d576 node::CustomBufferJSListener::OnStreamAlloc(unsigned long) + 98214
6   Electron Framework            	       0x10f56d4c6 node::CustomBufferJSListener::OnStreamAlloc(unsigned long) + 98038
7   Electron Framework            	       0x10f5f15d0 v8::V8::SetEntropySource(bool (*)(unsigned char*, unsigned long)) + 3008
8   Electron Framework            	       0x10fa93689 v8::ScriptCompiler::ConsumeCodeCacheTask::Run() + 79465
9   Electron Framework            	       0x10fa9362b v8::ScriptCompiler::ConsumeCodeCacheTask::Run() + 79371
10  Electron Framework            	       0x110507175 node::AsyncWrap::~AsyncWrap() + 627989
11  Electron Framework            	       0x110506e53 node::AsyncWrap::~AsyncWrap() + 627187
12  Electron Framework            	       0x1105185f1 node::AsyncWrap::~AsyncWrap() + 698769
13  Electron Framework            	       0x10fe902e6 v8::CppHeap::CollectStatistics(cppgc::HeapStatistics::DetailLevel) + 1067110
14  Electron Framework            	       0x10f9e0b71 v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>) + 157089
15  Electron Framework            	       0x10f9e09c1 v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>) + 156657
16  Electron Framework            	       0x1124176cb ares_llist_node_next + 185707
17  Electron Framework            	       0x10f9c3d4a v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>) + 38778
18  Electron Framework            	       0x110ad093f crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 1277199
19  Electron Framework            	       0x110ad18b8 crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 1281160
20  Electron Framework            	       0x110ad1715 crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*) + 1280741
21  Electron Framework            	       0x10f8258a3 v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&) + 175331
22  Electron Framework            	       0x10f8250c8 v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&) + 173320
23  Electron Framework            	       0x11041f31e ElectronMain + 142
24  dyld                          	    0x7ff819fe0530 start + 3056

Thread 1::  Dispatch queue: com.apple.CoreAnalytics::Client XPC Send
0   CoreAnalytics                 	    0x7ff822eaf287 invocation function for block in CoreAnalytics::Client::sendXpcMessage_sync(applesauce::xpc::dict, XPCMessagePriority, bool, bool) + 108
1   libdispatch.dylib             	    0x7ff81a1e73a0 _dispatch_block_async_invoke2 + 85
2   libdispatch.dylib             	    0x7ff81a1f09fc _dispatch_client_callout + 6
3   libdispatch.dylib             	    0x7ff81a1e135f _dispatch_lane_serial_drain + 779
4   libdispatch.dylib             	    0x7ff81a1e1dad _dispatch_lane_invoke + 382
5   libdispatch.dylib             	    0x7ff81a1eab96 _dispatch_root_queue_drain_deferred_wlh + 275
6   libdispatch.dylib             	    0x7ff81a1ea4e3 _dispatch_workloop_worker_thread + 688
7   libsystem_pthread.dylib       	    0x7ff81a382861 _pthread_wqthread + 298
8   libsystem_pthread.dylib       	    0x7ff81a381843 start_wqthread + 15

Thread 2:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 3:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 4:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 5:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 6:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 7:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 8:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 9:: ThreadPoolServiceThread
0   libsystem_kernel.dylib        	    0x7ff81a34d54a kevent64 + 10
1   Electron Framework            	       0x10f44d6be v8::Module::GetUnboundModuleScript() + 97918
2   Electron Framework            	       0x10f965f7b node::PrincipalRealm::enhance_fatal_stack_after_inspector() const + 106203
3   Electron Framework            	       0x10ec4411c node::StreamBase::GetFD() + 844
4   Electron Framework            	       0x10f10adc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
5   Electron Framework            	       0x10f10ad18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
6   Electron Framework            	       0x10f10acbd v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21357
7   Electron Framework            	       0x1137721e4 ares_dns_rr_get_ttl + 3948708
8   Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
9   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
10  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 10:: ThreadPoolForegroundWorker
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x10e1628e0 v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 85104
5   Electron Framework            	       0x10e1626bd v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84557
6   Electron Framework            	       0x10e16265d v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84461
7   Electron Framework            	       0x10e1625ed v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84349
8   Electron Framework            	       0x10e015e40 v8::Value::Uint32Value(v8::Local<v8::Context>) const + 1296
9   Electron Framework            	       0x10ed7441d v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 14157
10  Electron Framework            	       0x10ed74331 v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 13921
11  Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
12  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
13  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 11:: ThreadPoolBackgroundWorker
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x10e1628e0 v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 85104
5   Electron Framework            	       0x10e1626bd v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84557
6   Electron Framework            	       0x10e16265d v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84461
7   Electron Framework            	       0x10e1625ed v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84349
8   Electron Framework            	       0x10e015e40 v8::Value::Uint32Value(v8::Local<v8::Context>) const + 1296
9   Electron Framework            	       0x10ed7444d v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 14205
10  Electron Framework            	       0x10ed7435a v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 13962
11  Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
12  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
13  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 12:: ThreadPoolForegroundWorker
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x10e1628e0 v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 85104
5   Electron Framework            	       0x10e1626bd v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84557
6   Electron Framework            	       0x10e16265d v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84461
7   Electron Framework            	       0x10e1625ed v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84349
8   Electron Framework            	       0x10e015e40 v8::Value::Uint32Value(v8::Local<v8::Context>) const + 1296
9   Electron Framework            	       0x10ed7441d v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 14157
10  Electron Framework            	       0x10ed74331 v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 13921
11  Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
12  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
13  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 13:: Chrome_IOThread
0   libsystem_kernel.dylib        	    0x7ff81a34d54a kevent64 + 10
1   Electron Framework            	       0x10f44d6be v8::Module::GetUnboundModuleScript() + 97918
2   Electron Framework            	       0x10f965f7b node::PrincipalRealm::enhance_fatal_stack_after_inspector() const + 106203
3   Electron Framework            	       0x10ec4411c node::StreamBase::GetFD() + 844
4   Electron Framework            	       0x10f10adc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
5   Electron Framework            	       0x10f10ad18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
6   Electron Framework            	       0x10f7ff53f v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&) + 18815
7   Electron Framework            	       0x1137721e4 ares_dns_rr_get_ttl + 3948708
8   Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
9   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
10  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 14:: MemoryInfra
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x10e1628e0 v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 85104
5   Electron Framework            	       0x10e1626bd v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84557
6   Electron Framework            	       0x10dfe14d3 v8::CodeEvent::GetScriptName() + 5363
7   Electron Framework            	       0x10dfe11c5 v8::CodeEvent::GetScriptName() + 4581
8   Electron Framework            	       0x10ec4411c node::StreamBase::GetFD() + 844
9   Electron Framework            	       0x10f10adc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
10  Electron Framework            	       0x10f10ad18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
11  Electron Framework            	       0x1137721e4 ares_dns_rr_get_ttl + 3948708
12  Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
13  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
14  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 15:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 16:
0   libsystem_kernel.dylib        	    0x7ff81a348822 kevent + 10
1   Electron Framework            	       0x11041e9fb uv__io_poll + 1275
2   Electron Framework            	       0x11040bf45 uv_run + 485
3   Electron Framework            	       0x1107ffa40 node::WorkerThreadsTaskRunner::DelayedTaskScheduler::Start()::'lambda'(void*)::__invoke(void*) + 128
4   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
5   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 17:
0   libsystem_kernel.dylib        	    0x7ff81a3466f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff81a3862ae _pthread_cond_wait + 988
2   Electron Framework            	       0x110419683 uv_cond_wait + 35
3   Electron Framework            	       0x1107fd35c node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel) + 1820
4   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
5   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 18:
0   libsystem_kernel.dylib        	    0x7ff81a3466f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff81a3862ae _pthread_cond_wait + 988
2   Electron Framework            	       0x110419683 uv_cond_wait + 35
3   Electron Framework            	       0x1107fd35c node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel) + 1820
4   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
5   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 19:
0   libsystem_kernel.dylib        	    0x7ff81a3466f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff81a3862ae _pthread_cond_wait + 988
2   Electron Framework            	       0x110419683 uv_cond_wait + 35
3   Electron Framework            	       0x1107fd35c node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel) + 1820
4   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
5   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 20:
0   libsystem_kernel.dylib        	    0x7ff81a343ac6 semaphore_wait_trap + 10
1   Electron Framework            	       0x110419500 uv_sem_wait + 16
2   Electron Framework            	       0x11097cf73 node::inspector::Agent::GetWsUrl() const + 67
3   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
4   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 21:: NetworkConfigWatcher
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   CoreFoundation                	    0x7ff81a46fb82 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff81a46e5cf __CFRunLoopRun + 1430
6   CoreFoundation                	    0x7ff81a46da02 CFRunLoopRunSpecific + 536
7   Foundation                    	    0x7ff81b5b1ff3 -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 216
8   Electron Framework            	       0x10f86e72d cxxbridge1$rust_vec$bool$len + 30125
9   Electron Framework            	       0x10f86e5d2 cxxbridge1$rust_vec$bool$len + 29778
10  Electron Framework            	       0x10ec4411c node::StreamBase::GetFD() + 844
11  Electron Framework            	       0x10f10adc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
12  Electron Framework            	       0x10f10ad18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
13  Electron Framework            	       0x1137721e4 ares_dns_rr_get_ttl + 3948708
14  Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
15  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
16  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 22:: CrShutdownDetector
0   libsystem_kernel.dylib        	    0x7ff81a3445b2 read + 10
1   Electron Framework            	       0x110637e8c node::sqlite::UserDefinedFunction::xDestroy(void*) + 491564
2   Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
3   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
4   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 23:: NetworkConfigWatcher
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   CoreFoundation                	    0x7ff81a46fb82 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff81a46e5cf __CFRunLoopRun + 1430
6   CoreFoundation                	    0x7ff81a46da02 CFRunLoopRunSpecific + 536
7   Foundation                    	    0x7ff81b5b1ff3 -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 216
8   Electron Framework            	       0x10f86e72d cxxbridge1$rust_vec$bool$len + 30125
9   Electron Framework            	       0x10f86e5d2 cxxbridge1$rust_vec$bool$len + 29778
10  Electron Framework            	       0x10ec4411c node::StreamBase::GetFD() + 844
11  Electron Framework            	       0x10f10adc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
12  Electron Framework            	       0x10f10ad18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
13  Electron Framework            	       0x1137721e4 ares_dns_rr_get_ttl + 3948708
14  Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
15  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
16  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 24:: ThreadPoolForegroundWorker
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x10e1628e0 v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 85104
5   Electron Framework            	       0x10e1626bd v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84557
6   Electron Framework            	       0x10e16265d v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84461
7   Electron Framework            	       0x10e1625ed v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84349
8   Electron Framework            	       0x10e015e40 v8::Value::Uint32Value(v8::Local<v8::Context>) const + 1296
9   Electron Framework            	       0x10ed7441d v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 14157
10  Electron Framework            	       0x10ed74331 v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 13921
11  Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
12  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
13  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 25:: ThreadPoolForegroundWorker
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x10e1628e0 v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 85104
5   Electron Framework            	       0x10e1626bd v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84557
6   Electron Framework            	       0x10e16265d v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84461
7   Electron Framework            	       0x10e1625ed v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long) + 84349
8   Electron Framework            	       0x10e015e40 v8::Value::Uint32Value(v8::Local<v8::Context>) const + 1296
9   Electron Framework            	       0x10ed7441d v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 14157
10  Electron Framework            	       0x10ed74331 v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>) + 13921
11  Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
12  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
13  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 26:: CompositorTileWorker1
0   libsystem_kernel.dylib        	    0x7ff81a3466f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff81a3862ae _pthread_cond_wait + 988
2   Electron Framework            	       0x10e80ccfd node::AsyncResource::get_trigger_async_id() const + 60589
3   Electron Framework            	       0x10ebed88d cppgc::internal::PersistentRegionBase::PersistentRegionBase(cppgc::internal::FatalOutOfMemoryHandler const&) + 7757
4   Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
5   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
6   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 27:: Chrome_InProcGpuThread
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   CoreFoundation                	    0x7ff81a46fb82 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff81a46e5cf __CFRunLoopRun + 1430
6   CoreFoundation                	    0x7ff81a46da02 CFRunLoopRunSpecific + 536
7   Foundation                    	    0x7ff81b5b1ff3 -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 216
8   Electron Framework            	       0x10f86e72d cxxbridge1$rust_vec$bool$len + 30125
9   Electron Framework            	       0x10f86e5d2 cxxbridge1$rust_vec$bool$len + 29778
10  Electron Framework            	       0x10ec4411c node::StreamBase::GetFD() + 844
11  Electron Framework            	       0x10f10adc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
12  Electron Framework            	       0x10f10ad18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
13  Electron Framework            	       0x1137721e4 ares_dns_rr_get_ttl + 3948708
14  Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
15  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
16  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 28:: Chrome_ChildIOThread
0   libsystem_kernel.dylib        	    0x7ff81a34d54a kevent64 + 10
1   Electron Framework            	       0x10f44d6be v8::Module::GetUnboundModuleScript() + 97918
2   Electron Framework            	       0x10f965f7b node::PrincipalRealm::enhance_fatal_stack_after_inspector() const + 106203
3   Electron Framework            	       0x10ec4411c node::StreamBase::GetFD() + 844
4   Electron Framework            	       0x10f10adc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
5   Electron Framework            	       0x10f10ad18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
6   Electron Framework            	       0x11502a6c3 ares_llist_len + 25379219
7   Electron Framework            	       0x1137721e4 ares_dns_rr_get_ttl + 3948708
8   Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
9   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
10  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 29:: VizCompositorThread
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   CoreFoundation                	    0x7ff81a46fb82 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff81a46e5cf __CFRunLoopRun + 1430
6   CoreFoundation                	    0x7ff81a46da02 CFRunLoopRunSpecific + 536
7   Foundation                    	    0x7ff81b5b1ff3 -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 216
8   Electron Framework            	       0x10f86e72d cxxbridge1$rust_vec$bool$len + 30125
9   Electron Framework            	       0x10f86e5d2 cxxbridge1$rust_vec$bool$len + 29778
10  Electron Framework            	       0x10ec4411c node::StreamBase::GetFD() + 844
11  Electron Framework            	       0x10f10adc5 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21621
12  Electron Framework            	       0x10f10ad18 v8::ValueSerializer::Delegate::FreeBufferMemory(void*) + 21448
13  Electron Framework            	       0x1137721e4 ares_dns_rr_get_ttl + 3948708
14  Electron Framework            	       0x10e8b22ed v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef) + 175341
15  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
16  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 30:
0   libsystem_kernel.dylib        	    0x7ff81a343ac6 semaphore_wait_trap + 10
1   Electron Framework            	       0x110419500 uv_sem_wait + 16
2   Electron Framework            	       0x1105c8164 node::sqlite::UserDefinedFunction::xDestroy(void*) + 33540
3   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
4   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15


Thread 0 crashed with X86 Thread State (64-bit):
  rax: 0x0000000000000000  rbx: 0x000001040302d4c0  rcx: 0x0000000000000071  rdx: 0x0000000000000070
  rdi: 0x00007ff7bcea30a0  rsi: 0x00007ff7bcea30c0  rbp: 0x00007ff7bcea3120  rsp: 0x00007ff7bcea3030
   r8: 0x000000000000006e   r9: 0x0000010400000000  r10: 0x0f0f0f0f0f0f0f0f  r11: 0x00007ef3b9f0afe1
  r12: 0x00007ff7bcea30c0  r13: 0xaaaaaaaaaaaaaaaa  r14: 0x0000000000000003  r15: 0x00007ff7bcea3038
  rip: 0x000000011050bbbb  rfl: 0x0000000000000246  cr2: 0x0000000000000000
  
Logical CPU:     0
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
       0x10305b000 -        0x10305cfff com.gastofacil.desktop (0.1.1) <4c4c449c-5555-3144-a12c-4139c48fff89> /Applications/Gasto Fácil.app/Contents/MacOS/Gasto Fácil
       0x10ded0000 -        0x118500fff com.github.Electron.framework (*) <4c4c446c-5555-3144-a125-6ff9ff1c32a3> /Applications/Gasto Fácil.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Electron Framework
       0x103082000 -        0x103096fff com.github.Squirrel (1.0) <4c4c441e-5555-3144-a154-ddfb92285a36> /Applications/Gasto Fácil.app/Contents/Frameworks/Squirrel.framework/Versions/A/Squirrel
       0x1030f9000 -        0x10313cfff com.electron.reactive (3.1.0) <4c4c442a-5555-3144-a10d-2365d9b82e4d> /Applications/Gasto Fácil.app/Contents/Frameworks/ReactiveObjC.framework/Versions/A/ReactiveObjC
       0x1030a0000 -        0x1030abfff org.mantle.Mantle (1.0) <4c4c44d6-5555-3144-a14e-916174ccea73> /Applications/Gasto Fácil.app/Contents/Frameworks/Mantle.framework/Versions/A/Mantle
       0x103396000 -        0x103598fff libffmpeg.dylib (*) <4c4c4434-5555-3144-a14c-cedbf33f034a> /Applications/Gasto Fácil.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libffmpeg.dylib
       0x10bb0d000 -        0x10bb19fff libobjc-trampolines.dylib (*) <72642d3c-0206-38ee-9349-c720aee663ee> /usr/lib/libobjc-trampolines.dylib
    0x7ff819fda000 -     0x7ff81a0746c7 dyld (*) <6b5ca9e7-21aa-36e9-9006-99ad808b943b> /usr/lib/dyld
               0x0 - 0xffffffffffffffff ??? (*) <00000000-0000-0000-0000-000000000000> ???
    0x7ff822e93000 -     0x7ff822ec0d94 com.apple.analyticsd (1.0) <2b7a49e1-934a-3755-a1d8-ddc414d740ee> /System/Library/PrivateFrameworks/CoreAnalytics.framework/Versions/A/CoreAnalytics
    0x7ff81a1d9000 -     0x7ff81a220339 libdispatch.dylib (*) <6ca6112a-70c8-39a2-8cfa-da2139709d3c> /usr/lib/system/libdispatch.dylib
    0x7ff81a380000 -     0x7ff81a38bfd7 libsystem_pthread.dylib (*) <a031f066-4daa-3801-9155-88106d874835> /usr/lib/system/libsystem_pthread.dylib
    0x7ff81a343000 -     0x7ff81a37fb6f libsystem_kernel.dylib (*) <482d57d2-374a-3244-84d0-d09d58d29b2e> /usr/lib/system/libsystem_kernel.dylib
    0x7ff81a3f4000 -     0x7ff81a8a8fe2 com.apple.CoreFoundation (6.9) <9b044a1f-5113-3cc1-83f3-a4ddbaf4ae65> /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation
    0x7ff81b557000 -     0x7ff81c348b61 com.apple.Foundation (6.9) <59a8cb7a-927e-30b2-b8f7-e03f4621d48f> /System/Library/Frameworks/Foundation.framework/Versions/C/Foundation

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
ColorSync                           68K        3 
CoreGraphics                         4K        1 
CoreServices                       148K        1 
Foundation                          16K        1 
Kernel Alloc Once                    8K        1 
MALLOC                           543.2M       28 
MALLOC guard page                   48K       12 
Memory Tag 253                    32.0G      973 
Memory Tag 255                     1.3T       78 
Memory Tag 255 (reserved)          272K        5         reserved VM address space (unallocated)
PROTECTED_MEMORY                     4K        1 
STACK GUARD                       56.1M       31 
Stack                            164.8M       31 
VM_ALLOCATE                         96K        6 
__CTF                               824        1 
__DATA                            34.5M      917 
__DATA_CONST                     106.4M      937 
__DATA_DIRTY                      2588K      342 
__FONT_DATA                        2352        1 
__INFO_FILTER                         8        1 
__LINKEDIT                       163.3M        9 
__OBJC_RO                         61.3M        1 
__OBJC_RW                         2396K        2 
__TEXT                             1.2G      954 
__TPRO_CONST                         16        2 
mapped file                      220.0M       19 
shared memory                     1304K       17 
===========                     =======  ======= 
TOTAL                              1.4T     4376 
TOTAL, minus reserved VM space     1.4T     4376 



-----------
Full Report
-----------

{"app_name":"Gasto Fácil","timestamp":"2026-05-31 15:44:59.00 -0300","app_version":"0.1.1","slice_uuid":"4c4c449c-5555-3144-a12c-4139c48fff89","build_version":"0.1.1","platform":1,"bundleID":"com.gastofacil.desktop","share_with_app_devs":0,"is_first_party":0,"bug_type":"309","os_version":"macOS 15.7.2 (24G325)","roots_installed":0,"name":"Gasto Fácil","incident_id":"0E891CA9-E7F6-4956-BBCA-6E5ED2F2C35E"}
{
  "uptime" : 5000,
  "procRole" : "Foreground",
  "version" : 2,
  "userID" : 501,
  "deployVersion" : 210,
  "modelCode" : "MacBookAir9,1",
  "coalitionID" : 2598,
  "osVersion" : {
    "train" : "macOS 15.7.2",
    "build" : "24G325",
    "releaseType" : "User"
  },
  "captureTime" : "2026-05-31 15:44:53.4127 -0300",
  "codeSigningMonitor" : 0,
  "incident" : "0E891CA9-E7F6-4956-BBCA-6E5ED2F2C35E",
  "pid" : 2277,
  "cpuType" : "X86-64",
  "roots_installed" : 0,
  "bug_type" : "309",
  "procLaunch" : "2026-05-31 15:44:36.7723 -0300",
  "procStartAbsTime" : 4984256191696,
  "procExitAbsTime" : 5000744960304,
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
  "wakeTime" : 1961,
  "bridgeVersion" : {"build":"23P1072","train":"10.1"},
  "sleepWakeUUID" : "F7BB088D-D286-4A22-8B63-880D36BBD75C",
  "sip" : "enabled",
  "exception" : {"codes":"0x0000000000000002, 0x0000000000000000","rawCodes":[2,0],"type":"EXC_BREAKPOINT","signal":"SIGTRAP"},
  "termination" : {"flags":0,"code":5,"namespace":"SIGNAL","indicator":"Trace\/BPT trap: 5","byProc":"exc handler","byPid":2277},
  "os_fault" : {"process":"Gasto Fácil"},
  "extMods" : {"caller":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"system":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"targeted":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"warnings":0},
  "faultingThread" : 0,
  "threads" : [{"queue":"com.apple.main-thread","instructionState":{"instructionStream":{"bytes":[137,199,255,145,8,1,0,0,72,137,199,232,181,187,5,0,72,137,199,232,205,187,5,0,132,192,116,20,72,141,53,106,220,100,6,186,22,0,0,0,72,137,223,232,101,175,83,255,72,139,125,160,72,199,69,160,0,0,0,0,72,133,255,116,6,72,139,7,255,80,8,68,138,125,192,65,128,231,1,233,176,252,255,255,49,201,235,137,15,11,232,70,90,241,255,204,15,11,15,31,0,85,72,137,229,65,87,65,86,83,80,72,137,251,72,184,170,170,170,170,170,170,170,170,76,141,117,224,73,137,6,76,137,247,232,250,182,4,255,69,49,255,76,137,123,16,15,87,192,15,17,3,73,139,62,72,139,7,72,141,53,163,219,100,6,186,14,0,0,0,72,137,217,255,80,16,73,139,62,77,137,62,72,133,255,116,6,72,139,7,255,80],"offset":96}},"frames":[{"imageOffset":40090555,"symbol":"node::AsyncWrap::~AsyncWrap()","symbolLocation":647003,"imageIndex":1},{"imageOffset":72599882,"symbol":"ares_llist_node_next","symbolLocation":141290,"imageIndex":1},{"imageOffset":29577063,"symbol":"v8::Isolate::GetHeapSpaceStatistics(v8::HeapSpaceStatistics*, unsigned long)","symbolLocation":79239,"imageIndex":1},{"imageOffset":29575849,"symbol":"v8::Isolate::GetHeapSpaceStatistics(v8::HeapSpaceStatistics*, unsigned long)","symbolLocation":78025,"imageIndex":1},{"imageOffset":23714841,"symbol":"node::CustomBufferJSListener::OnStreamAlloc(unsigned long)","symbolLocation":99913,"imageIndex":1},{"imageOffset":23713142,"symbol":"node::CustomBufferJSListener::OnStreamAlloc(unsigned long)","symbolLocation":98214,"imageIndex":1},{"imageOffset":23712966,"symbol":"node::CustomBufferJSListener::OnStreamAlloc(unsigned long)","symbolLocation":98038,"imageIndex":1},{"imageOffset":24253904,"symbol":"v8::V8::SetEntropySource(bool (*)(unsigned char*, unsigned long))","symbolLocation":3008,"imageIndex":1},{"imageOffset":29111945,"symbol":"v8::ScriptCompiler::ConsumeCodeCacheTask::Run()","symbolLocation":79465,"imageIndex":1},{"imageOffset":29111851,"symbol":"v8::ScriptCompiler::ConsumeCodeCacheTask::Run()","symbolLocation":79371,"imageIndex":1},{"imageOffset":40071541,"symbol":"node::AsyncWrap::~AsyncWrap()","symbolLocation":627989,"imageIndex":1},{"imageOffset":40070739,"symbol":"node::AsyncWrap::~AsyncWrap()","symbolLocation":627187,"imageIndex":1},{"imageOffset":40142321,"symbol":"node::AsyncWrap::~AsyncWrap()","symbolLocation":698769,"imageIndex":1},{"imageOffset":33293030,"symbol":"v8::CppHeap::CollectStatistics(cppgc::HeapStatistics::DetailLevel)","symbolLocation":1067110,"imageIndex":1},{"imageOffset":28380017,"symbol":"v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>)","symbolLocation":157089,"imageIndex":1},{"imageOffset":28379585,"symbol":"v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>)","symbolLocation":156657,"imageIndex":1},{"imageOffset":72644299,"symbol":"ares_llist_node_next","symbolLocation":185707,"imageIndex":1},{"imageOffset":28261706,"symbol":"v8::DictionaryTemplate::New(v8::Isolate*, v8::MemorySpan<std::__Cr::basic_string_view<char, std::__Cr::char_traits<char>> const>)","symbolLocation":38778,"imageIndex":1},{"imageOffset":46139711,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":1277199,"imageIndex":1},{"imageOffset":46143672,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":1281160,"imageIndex":1},{"imageOffset":46143253,"symbol":"crdtp::ProtocolTypeTraits<std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>, void>::Deserialize(crdtp::DeserializerState*, std::__Cr::unique_ptr<node::inspector::protocol::Object, std::__Cr::default_delete<node::inspector::protocol::Object>>*)","symbolLocation":1280741,"imageIndex":1},{"imageOffset":26564771,"symbol":"v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&)","symbolLocation":175331,"imageIndex":1},{"imageOffset":26562760,"symbol":"v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&)","symbolLocation":173320,"imageIndex":1},{"imageOffset":39121694,"symbol":"ElectronMain","symbolLocation":142,"imageIndex":1},{"imageOffset":25904,"symbol":"start","symbolLocation":3056,"imageIndex":7}],"id":79438,"triggered":true,"threadState":{"r13":{"value":12297829382473034410},"rax":{"value":0},"rflags":{"value":582},"cpu":{"value":0},"r14":{"value":3},"rsi":{"value":140702003114176},"r8":{"value":110},"cr2":{"value":0},"rdx":{"value":112},"r10":{"value":1085102592571150095},"r9":{"value":1116691496960},"r15":{"value":140702003114040},"rbx":{"value":1116742014144},"trap":{"value":3},"err":{"value":0},"r11":{"value":139585261711329},"rip":{"value":4568693691,"matchesCrashFrame":1},"rbp":{"value":140702003114272},"rsp":{"value":140702003114032},"r12":{"value":140702003114176},"rcx":{"value":113},"flavor":"x86_THREAD_STATE","rdi":{"value":140702003114144}},"name":"CrBrowserMain"},{"id":79613,"threadState":{"r13":{"value":140704673925792,"symbolLocation":0,"symbol":"(anonymous namespace)::sFrameworkLogdom"},"rax":{"value":140704622817520,"symbolLocation":0,"symbol":"flogdom"},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":140704669851072,"symbolLocation":0,"symbol":"CoreAnalytics::Client::get()::client"},"rsi":{"value":1099513023716},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":7297576264},"r10":{"value":137438953472},"r9":{"value":784},"r15":{"value":1099513078184},"rbx":{"value":1099513078144},"trap":{"value":222},"err":{"value":0},"r11":{"value":123145386220208},"rip":{"value":140703714439815},"rbp":{"value":123145386219712},"rsp":{"value":123145386219504},"r12":{"value":1099513077056},"rcx":{"value":140704610345184,"symbolLocation":0,"symbol":"_xpc_dictionary_null_value"},"flavor":"x86_THREAD_STATE","rdi":{"value":1099513023632}},"queue":"com.apple.CoreAnalytics::Client XPC Send","frames":[{"imageOffset":115335,"symbol":"invocation function for block in CoreAnalytics::Client::sendXpcMessage_sync(applesauce::xpc::dict, XPCMessagePriority, bool, bool)","symbolLocation":108,"imageIndex":9},{"imageOffset":58272,"symbol":"_dispatch_block_async_invoke2","symbolLocation":85,"imageIndex":10},{"imageOffset":96764,"symbol":"_dispatch_client_callout","symbolLocation":6,"imageIndex":10},{"imageOffset":33631,"symbol":"_dispatch_lane_serial_drain","symbolLocation":779,"imageIndex":10},{"imageOffset":36269,"symbol":"_dispatch_lane_invoke","symbolLocation":382,"imageIndex":10},{"imageOffset":72598,"symbol":"_dispatch_root_queue_drain_deferred_wlh","symbolLocation":275,"imageIndex":10},{"imageOffset":70883,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":688,"imageIndex":10},{"imageOffset":10337,"symbol":"_pthread_wqthread","symbolLocation":298,"imageIndex":11},{"imageOffset":6211,"symbol":"start_wqthread","symbolLocation":15,"imageIndex":11}]},{"id":79614,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":11}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":5123},"r8":{"value":409603},"cr2":{"value":0},"rdx":{"value":123145386233856},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":123145386758144},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145386758144},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145386758144}}},{"id":79635,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":11}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":16903},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145386770432},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145387293560},"rbx":{"value":123145387294720},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145387294720},"r12":{"value":5193733},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145387294720}}},{"id":79676,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":11}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":21779},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145387307008},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145387830136},"rbx":{"value":123145387831296},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145387831296},"r12":{"value":5193734},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145387831296}}},{"id":79701,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":11}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":34307},"r8":{"value":409602},"cr2":{"value":0},"rdx":{"value":123145387843584},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145388366712},"rbx":{"value":123145388367872},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145388367872},"r12":{"value":7094276},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145388367872}}},{"id":79702,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":11}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":31235},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145388380160},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145388903288},"rbx":{"value":123145388904448},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145388904448},"r12":{"value":5193734},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145388904448}}},{"id":79703,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":11}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":30987},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145388916736},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145389439872},"rbx":{"value":123145389441024},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145389441024},"r12":{"value":1982472},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145389441024}}},{"id":79704,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":11}],"threadState":{"r13":{"value":0},"rax":{"value":0},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":0},"r8":{"value":278532},"cr2":{"value":0},"rdx":{"value":123145389453312},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":0},"err":{"value":0},"r11":{"value":0},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145389977600},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145389977600}}},{"id":79708,"name":"ThreadPoolServiceThread","threadState":{"r13":{"value":0},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1116691794688},"rsi":{"value":0},"r8":{"value":4},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":1116693057024},"r9":{"value":0},"r15":{"value":0},"rbx":{"value":1099512641136},"trap":{"value":133},"err":{"value":33554801},"r11":{"value":582},"rip":{"value":140703568287050},"rbp":{"value":123145398914448},"rsp":{"value":123145398914264},"r12":{"value":2147483648},"rcx":{"value":123145398914264},"flavor":"x86_THREAD_STATE","rdi":{"value":11}},"frames":[{"imageOffset":42314,"symbol":"kevent64","symbolLocation":10,"imageIndex":12},{"imageOffset":22533822,"symbol":"v8::Module::GetUnboundModuleScript()","symbolLocation":97918,"imageIndex":1},{"imageOffset":27877243,"symbol":"node::PrincipalRealm::enhance_fatal_stack_after_inspector() const","symbolLocation":106203,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":19115197,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21357,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79709,"name":"ThreadPoolForegroundWorker","threadState":{"r13":{"value":17179869442},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":117660629073920},"rsi":{"value":17179869442},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":117660629073920},"r9":{"value":117660629073920},"r15":{"value":32},"rbx":{"value":123145407315216},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145407314544},"rsp":{"value":123145407314440},"r12":{"value":117660629073920},"rcx":{"value":123145407314440},"flavor":"x86_THREAD_STATE","rdi":{"value":123145407315216}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":12},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":12},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":12},{"imageOffset":2697440,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":85104,"imageIndex":1},{"imageOffset":2696893,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84557,"imageIndex":1},{"imageOffset":2696797,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84461,"imageIndex":1},{"imageOffset":2696685,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84349,"imageIndex":1},{"imageOffset":1334848,"symbol":"v8::Value::Uint32Value(v8::Local<v8::Context>) const","symbolLocation":1296,"imageIndex":1},{"imageOffset":15352861,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":14157,"imageIndex":1},{"imageOffset":15352625,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":13921,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79710,"name":"ThreadPoolBackgroundWorker","threadState":{"r13":{"value":17179869442},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":112163070935040},"rsi":{"value":17179869442},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":112163070935040},"r9":{"value":112163070935040},"r15":{"value":32},"rbx":{"value":123145415716112},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145415715440},"rsp":{"value":123145415715336},"r12":{"value":112163070935040},"rcx":{"value":123145415715336},"flavor":"x86_THREAD_STATE","rdi":{"value":123145415716112}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":12},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":12},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":12},{"imageOffset":2697440,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":85104,"imageIndex":1},{"imageOffset":2696893,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84557,"imageIndex":1},{"imageOffset":2696797,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84461,"imageIndex":1},{"imageOffset":2696685,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84349,"imageIndex":1},{"imageOffset":1334848,"symbol":"v8::Value::Uint32Value(v8::Local<v8::Context>) const","symbolLocation":1296,"imageIndex":1},{"imageOffset":15352909,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":14205,"imageIndex":1},{"imageOffset":15352666,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":13962,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79713,"name":"ThreadPoolForegroundWorker","threadState":{"r13":{"value":17179869442},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":142983756251136},"rsi":{"value":17179869442},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":142983756251136},"r9":{"value":142983756251136},"r15":{"value":32},"rbx":{"value":123145424117008},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145424116336},"rsp":{"value":123145424116232},"r12":{"value":142983756251136},"rcx":{"value":123145424116232},"flavor":"x86_THREAD_STATE","rdi":{"value":123145424117008}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":12},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":12},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":12},{"imageOffset":2697440,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":85104,"imageIndex":1},{"imageOffset":2696893,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84557,"imageIndex":1},{"imageOffset":2696797,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84461,"imageIndex":1},{"imageOffset":2696685,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84349,"imageIndex":1},{"imageOffset":1334848,"symbol":"v8::Value::Uint32Value(v8::Local<v8::Context>) const","symbolLocation":1296,"imageIndex":1},{"imageOffset":15352861,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":14157,"imageIndex":1},{"imageOffset":15352625,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":13921,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79714,"name":"Chrome_IOThread","threadState":{"r13":{"value":0},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1116691796096},"rsi":{"value":0},"r8":{"value":1},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":1116691668864},"r9":{"value":0},"r15":{"value":0},"rbx":{"value":1099512633456},"trap":{"value":133},"err":{"value":33554801},"r11":{"value":582},"rip":{"value":140703568287050},"rbp":{"value":123145432518000},"rsp":{"value":123145432517816},"r12":{"value":2147483648},"rcx":{"value":123145432517816},"flavor":"x86_THREAD_STATE","rdi":{"value":12}},"frames":[{"imageOffset":42314,"symbol":"kevent64","symbolLocation":10,"imageIndex":12},{"imageOffset":22533822,"symbol":"v8::Module::GetUnboundModuleScript()","symbolLocation":97918,"imageIndex":1},{"imageOffset":27877243,"symbol":"node::PrincipalRealm::enhance_fatal_stack_after_inspector() const","symbolLocation":106203,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":26408255,"symbol":"v8::ObjectTemplate::SetHandler(v8::NamedPropertyHandlerConfiguration const&)","symbolLocation":18815,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79715,"name":"MemoryInfra","threadState":{"r13":{"value":17179869186},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":149563646148608},"rsi":{"value":17179869186},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":149563646148608},"r9":{"value":149563646148608},"r15":{"value":32},"rbx":{"value":123145440918608},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145440917936},"rsp":{"value":123145440917832},"r12":{"value":149563646148608},"rcx":{"value":123145440917832},"flavor":"x86_THREAD_STATE","rdi":{"value":123145440918608}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":12},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":12},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":12},{"imageOffset":2697440,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":85104,"imageIndex":1},{"imageOffset":2696893,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84557,"imageIndex":1},{"imageOffset":1119443,"symbol":"v8::CodeEvent::GetScriptName()","symbolLocation":5363,"imageIndex":1},{"imageOffset":1118661,"symbol":"v8::CodeEvent::GetScriptName()","symbolLocation":4581,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79720,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":11}],"threadState":{"r13":{"value":0},"rax":{"value":0},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":0},"r8":{"value":278532},"cr2":{"value":0},"rdx":{"value":123145440931840},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":0},"err":{"value":0},"r11":{"value":0},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145441456128},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145441456128}}},{"id":79723,"frames":[{"imageOffset":22562,"symbol":"kevent","symbolLocation":10,"imageIndex":12},{"imageOffset":39119355,"symbol":"uv__io_poll","symbolLocation":1275,"imageIndex":1},{"imageOffset":39042885,"symbol":"uv_run","symbolLocation":485,"imageIndex":1},{"imageOffset":43186752,"symbol":"node::WorkerThreadsTaskRunner::DelayedTaskScheduler::Start()::'lambda'(void*)::__invoke(void*)","symbolLocation":128,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}],"threadState":{"r13":{"value":4294967295},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":123145449823984},"r8":{"value":1024},"cr2":{"value":0},"rdx":{"value":1},"r10":{"value":123145449823984},"r9":{"value":0},"r15":{"value":1116693776640},"rbx":{"value":0},"trap":{"value":133},"err":{"value":33554795},"r11":{"value":582},"rip":{"value":140703568267298},"rbp":{"value":123145449856800},"rsp":{"value":123145449823832},"r12":{"value":1116693776104},"rcx":{"value":123145449823832},"flavor":"x86_THREAD_STATE","rdi":{"value":15}}},{"id":79724,"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":12},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":11},{"imageOffset":39097987,"symbol":"uv_cond_wait","symbolLocation":35,"imageIndex":1},{"imageOffset":43176796,"symbol":"node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel)","symbolLocation":1820,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}],"threadState":{"r13":{"value":20890720933376},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1116692252728},"rsi":{"value":20890720933376},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":4864},"r10":{"value":0},"r9":{"value":160},"r15":{"value":4864},"rbx":{"value":123145458257920},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":140703568258806},"rbp":{"value":123145458257728},"rsp":{"value":123145458257576},"r12":{"value":123145458257600},"rcx":{"value":123145458257576},"flavor":"x86_THREAD_STATE","rdi":{"value":1116692252728}}},{"id":79725,"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":12},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":11},{"imageOffset":39097987,"symbol":"uv_cond_wait","symbolLocation":35,"imageIndex":1},{"imageOffset":43176796,"symbol":"node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel)","symbolLocation":1820,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}],"threadState":{"r13":{"value":23089744189440},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1116692252728},"rsi":{"value":23089744189440},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":5376},"r10":{"value":0},"r9":{"value":160},"r15":{"value":5376},"rbx":{"value":123145466658816},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":140703568258806},"rbp":{"value":123145466658624},"rsp":{"value":123145466658472},"r12":{"value":123145466658496},"rcx":{"value":123145466658472},"flavor":"x86_THREAD_STATE","rdi":{"value":1116692252728}}},{"id":79726,"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":12},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":11},{"imageOffset":39097987,"symbol":"uv_cond_wait","symbolLocation":35,"imageIndex":1},{"imageOffset":43176796,"symbol":"node::WorkerThreadsTaskRunner::WorkerThreadsTaskRunner(int, node::PlatformDebugLogLevel)","symbolLocation":1820,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}],"threadState":{"r13":{"value":21990232561408},"rax":{"value":260},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1116692252728},"rsi":{"value":21990232561408},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":5120},"r10":{"value":0},"r9":{"value":160},"r15":{"value":5120},"rbx":{"value":123145475059712},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":140703568258806},"rbp":{"value":123145475059520},"rsp":{"value":123145475059368},"r12":{"value":123145475059392},"rcx":{"value":123145475059368},"flavor":"x86_THREAD_STATE","rdi":{"value":1116692252728}}},{"id":79729,"frames":[{"imageOffset":2758,"symbol":"semaphore_wait_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":39097600,"symbol":"uv_sem_wait","symbolLocation":16,"imageIndex":1},{"imageOffset":44748659,"symbol":"node::inspector::Agent::GetWsUrl() const","symbolLocation":67,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}],"threadState":{"r13":{"value":0},"rax":{"value":14},"rflags":{"value":582},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":39683},"r8":{"value":123145390022656},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":39684},"r9":{"value":419432703},"r15":{"value":0},"rbx":{"value":4709742196},"trap":{"value":133},"err":{"value":16777252},"r11":{"value":582},"rip":{"value":140703568247494},"rbp":{"value":123145390022544},"rsp":{"value":123145390022520},"r12":{"value":0},"rcx":{"value":123145390022520},"flavor":"x86_THREAD_STATE","rdi":{"value":39939}}},{"id":79741,"name":"NetworkConfigWatcher","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":159442070929408},"rsi":{"value":21592279046},"r8":{"value":181145792},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":159442070929408},"r9":{"value":159442070929408},"r15":{"value":2},"rbx":{"value":123145483456048},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":140703568247626},"rbp":{"value":123145483455888},"rsp":{"value":123145483455784},"r12":{"value":159442070929408},"rcx":{"value":123145483455784},"flavor":"x86_THREAD_STATE","rdi":{"value":123145483456048}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":12},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":12},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":12},{"imageOffset":506754,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":13},{"imageOffset":501199,"symbol":"__CFRunLoopRun","symbolLocation":1430,"imageIndex":13},{"imageOffset":498178,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":13},{"imageOffset":372723,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":216,"imageIndex":14},{"imageOffset":26863405,"symbol":"cxxbridge1$rust_vec$bool$len","symbolLocation":30125,"imageIndex":1},{"imageOffset":26863058,"symbol":"cxxbridge1$rust_vec$bool$len","symbolLocation":29778,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79742,"name":"CrShutdownDetector","threadState":{"r13":{"value":0},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":123145390050856},"rsi":{"value":123145390050856},"r8":{"value":123145390050769},"cr2":{"value":0},"rdx":{"value":4},"r10":{"value":1},"r9":{"value":18},"r15":{"value":19},"rbx":{"value":1116740915104},"trap":{"value":133},"err":{"value":33554435},"r11":{"value":582},"rip":{"value":140703568250290},"rbp":{"value":123145390051200},"rsp":{"value":123145390050840},"r12":{"value":4},"rcx":{"value":123145390050840},"flavor":"x86_THREAD_STATE","rdi":{"value":19}},"frames":[{"imageOffset":5554,"symbol":"read","symbolLocation":10,"imageIndex":12},{"imageOffset":41320076,"symbol":"node::sqlite::UserDefinedFunction::xDestroy(void*)","symbolLocation":491564,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79743,"name":"NetworkConfigWatcher","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":264995187195904},"rsi":{"value":21592279046},"r8":{"value":189546688},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":264995187195904},"r9":{"value":264995187195904},"r15":{"value":2},"rbx":{"value":123145491856944},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":140703568247626},"rbp":{"value":123145491856784},"rsp":{"value":123145491856680},"r12":{"value":264995187195904},"rcx":{"value":123145491856680},"flavor":"x86_THREAD_STATE","rdi":{"value":123145491856944}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":12},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":12},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":12},{"imageOffset":506754,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":13},{"imageOffset":501199,"symbol":"__CFRunLoopRun","symbolLocation":1430,"imageIndex":13},{"imageOffset":498178,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":13},{"imageOffset":372723,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":216,"imageIndex":14},{"imageOffset":26863405,"symbol":"cxxbridge1$rust_vec$bool$len","symbolLocation":30125,"imageIndex":1},{"imageOffset":26863058,"symbol":"cxxbridge1$rust_vec$bool$len","symbolLocation":29778,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79744,"name":"ThreadPoolForegroundWorker","threadState":{"r13":{"value":17179869442},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":190228396507136},"rsi":{"value":17179869442},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":190228396507136},"r9":{"value":190228396507136},"r15":{"value":32},"rbx":{"value":123145500261648},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145500260976},"rsp":{"value":123145500260872},"r12":{"value":190228396507136},"rcx":{"value":123145500260872},"flavor":"x86_THREAD_STATE","rdi":{"value":123145500261648}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":12},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":12},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":12},{"imageOffset":2697440,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":85104,"imageIndex":1},{"imageOffset":2696893,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84557,"imageIndex":1},{"imageOffset":2696797,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84461,"imageIndex":1},{"imageOffset":2696685,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84349,"imageIndex":1},{"imageOffset":1334848,"symbol":"v8::Value::Uint32Value(v8::Local<v8::Context>) const","symbolLocation":1296,"imageIndex":1},{"imageOffset":15352861,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":14157,"imageIndex":1},{"imageOffset":15352625,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":13921,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79745,"name":"ThreadPoolForegroundWorker","threadState":{"r13":{"value":17179869442},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":191327908134912},"rsi":{"value":17179869442},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":191327908134912},"r9":{"value":191327908134912},"r15":{"value":32},"rbx":{"value":123145508662544},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145508661872},"rsp":{"value":123145508661768},"r12":{"value":191327908134912},"rcx":{"value":123145508661768},"flavor":"x86_THREAD_STATE","rdi":{"value":123145508662544}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":12},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":12},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":12},{"imageOffset":2697440,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":85104,"imageIndex":1},{"imageOffset":2696893,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84557,"imageIndex":1},{"imageOffset":2696797,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84461,"imageIndex":1},{"imageOffset":2696685,"symbol":"v8::internal::StrongRootAllocatorBase::deallocate_impl(unsigned long*, unsigned long)","symbolLocation":84349,"imageIndex":1},{"imageOffset":1334848,"symbol":"v8::Value::Uint32Value(v8::Local<v8::Context>) const","symbolLocation":1296,"imageIndex":1},{"imageOffset":15352861,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":14157,"imageIndex":1},{"imageOffset":15352625,"symbol":"v8::ScriptCompiler::CreateCodeCache(v8::Local<v8::UnboundScript>)","symbolLocation":13921,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79746,"name":"CompositorTileWorker1","threadState":{"r13":{"value":4294967552},"rax":{"value":260},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1116692603288},"rsi":{"value":4294967552},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":0},"r9":{"value":161},"r15":{"value":0},"rbx":{"value":123145517064192},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":140703568258806},"rbp":{"value":123145517063856},"rsp":{"value":123145517063704},"r12":{"value":123145517063728},"rcx":{"value":123145517063704},"flavor":"x86_THREAD_STATE","rdi":{"value":1116692603288}},"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":12},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":11},{"imageOffset":9686269,"symbol":"node::AsyncResource::get_trigger_async_id() const","symbolLocation":60589,"imageIndex":1},{"imageOffset":13752461,"symbol":"cppgc::internal::PersistentRegionBase::PersistentRegionBase(cppgc::internal::FatalOutOfMemoryHandler const&)","symbolLocation":7757,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79747,"name":"Chrome_InProcGpuThread","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":201223512784896},"rsi":{"value":21592279046},"r8":{"value":223150272},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":201223512784896},"r9":{"value":201223512784896},"r15":{"value":2},"rbx":{"value":123145525460528},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":140703568247626},"rbp":{"value":123145525460368},"rsp":{"value":123145525460264},"r12":{"value":201223512784896},"rcx":{"value":123145525460264},"flavor":"x86_THREAD_STATE","rdi":{"value":123145525460528}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":12},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":12},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":12},{"imageOffset":506754,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":13},{"imageOffset":501199,"symbol":"__CFRunLoopRun","symbolLocation":1430,"imageIndex":13},{"imageOffset":498178,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":13},{"imageOffset":372723,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":216,"imageIndex":14},{"imageOffset":26863405,"symbol":"cxxbridge1$rust_vec$bool$len","symbolLocation":30125,"imageIndex":1},{"imageOffset":26863058,"symbol":"cxxbridge1$rust_vec$bool$len","symbolLocation":29778,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79748,"name":"Chrome_ChildIOThread","threadState":{"r13":{"value":0},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1116691811584},"rsi":{"value":0},"r8":{"value":1},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":1116741759808},"r9":{"value":0},"r15":{"value":0},"rbx":{"value":1116693463536},"trap":{"value":133},"err":{"value":33554801},"r11":{"value":582},"rip":{"value":140703568287050},"rbp":{"value":123145533865312},"rsp":{"value":123145533865128},"r12":{"value":2147483648},"rcx":{"value":123145533865128},"flavor":"x86_THREAD_STATE","rdi":{"value":26}},"frames":[{"imageOffset":42314,"symbol":"kevent64","symbolLocation":10,"imageIndex":12},{"imageOffset":22533822,"symbol":"v8::Module::GetUnboundModuleScript()","symbolLocation":97918,"imageIndex":1},{"imageOffset":27877243,"symbol":"node::PrincipalRealm::enhance_fatal_stack_after_inspector() const","symbolLocation":106203,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":118859459,"symbol":"ares_llist_len","symbolLocation":25379219,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79750,"name":"VizCompositorThread","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":210019605807104},"rsi":{"value":21592279046},"r8":{"value":239952064},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":210019605807104},"r9":{"value":210019605807104},"r15":{"value":2},"rbx":{"value":123145542262320},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":140703568247626},"rbp":{"value":123145542262160},"rsp":{"value":123145542262056},"r12":{"value":210019605807104},"rcx":{"value":123145542262056},"flavor":"x86_THREAD_STATE","rdi":{"value":123145542262320}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":12},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":12},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":12},{"imageOffset":506754,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":13},{"imageOffset":501199,"symbol":"__CFRunLoopRun","symbolLocation":1430,"imageIndex":13},{"imageOffset":498178,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":13},{"imageOffset":372723,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":216,"imageIndex":14},{"imageOffset":26863405,"symbol":"cxxbridge1$rust_vec$bool$len","symbolLocation":30125,"imageIndex":1},{"imageOffset":26863058,"symbol":"cxxbridge1$rust_vec$bool$len","symbolLocation":29778,"imageIndex":1},{"imageOffset":14106908,"symbol":"node::StreamBase::GetFD()","symbolLocation":844,"imageIndex":1},{"imageOffset":19115461,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21621,"imageIndex":1},{"imageOffset":19115288,"symbol":"v8::ValueSerializer::Delegate::FreeBufferMemory(void*)","symbolLocation":21448,"imageIndex":1},{"imageOffset":92938724,"symbol":"ares_dns_rr_get_ttl","symbolLocation":3948708,"imageIndex":1},{"imageOffset":10363629,"symbol":"v8::internal::compiler::CompilationDependencies::DependOnOwnConstantDataProperty(v8::internal::compiler::JSObjectRef, v8::internal::compiler::MapRef, v8::internal::FieldIndex, v8::internal::compiler::ObjectRef)","symbolLocation":175341,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}]},{"id":79752,"frames":[{"imageOffset":2758,"symbol":"semaphore_wait_trap","symbolLocation":10,"imageIndex":12},{"imageOffset":39097600,"symbol":"uv_sem_wait","symbolLocation":16,"imageIndex":1},{"imageOffset":40862052,"symbol":"node::sqlite::UserDefinedFunction::xDestroy(void*)","symbolLocation":33540,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":11},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":11}],"threadState":{"r13":{"value":0},"rax":{"value":14},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":1116691924072},"rsi":{"value":1},"r8":{"value":1116741096080},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":1099512626177},"r9":{"value":0},"r15":{"value":0},"rbx":{"value":1116691924072},"trap":{"value":133},"err":{"value":16777252},"r11":{"value":514},"rip":{"value":140703568247494},"rbp":{"value":123145550667664},"rsp":{"value":123145550667640},"r12":{"value":0},"rcx":{"value":123145550667640},"flavor":"x86_THREAD_STATE","rdi":{"value":49155}}}],
  "usedImages" : [
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4345671680,
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
    "base" : 4528603136,
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
    "base" : 4345831424,
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
    "base" : 4346318848,
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
    "base" : 4345954304,
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
    "base" : 4349059072,
    "size" : 2109440,
    "uuid" : "4c4c4434-5555-3144-a14c-cedbf33f034a",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/Electron Framework.framework\/Versions\/A\/Libraries\/libffmpeg.dylib",
    "name" : "libffmpeg.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64h",
    "base" : 4491104256,
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
    "base" : 140703714324480,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.analyticsd",
    "size" : 187797,
    "uuid" : "2b7a49e1-934a-3755-a1d8-ddc414d740ee",
    "path" : "\/System\/Library\/PrivateFrameworks\/CoreAnalytics.framework\/Versions\/A\/CoreAnalytics",
    "name" : "CoreAnalytics",
    "CFBundleVersion" : "1"
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
    "arch" : "x86_64h",
    "base" : 140703568969728,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.CoreFoundation",
    "size" : 4935651,
    "uuid" : "9b044a1f-5113-3cc1-83f3-a4ddbaf4ae65",
    "path" : "\/System\/Library\/Frameworks\/CoreFoundation.framework\/Versions\/A\/CoreFoundation",
    "name" : "CoreFoundation",
    "CFBundleVersion" : "3603.1.401"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703587201024,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.Foundation",
    "size" : 14621538,
    "uuid" : "59a8cb7a-927e-30b2-b8f7-e03f4621d48f",
    "path" : "\/System\/Library\/Frameworks\/Foundation.framework\/Versions\/C\/Foundation",
    "name" : "Foundation",
    "CFBundleVersion" : "3603.1.401"
  }
],
  "sharedCache" : {
  "base" : 140703536193536,
  "size" : 30064771072,
  "uuid" : "38dc59c5-c114-3b57-8e82-052011a8da76"
},
  "vmSummary" : "ReadOnly portion of Libraries: Total=1.4G resident=0K(0%) swapped_out_or_unallocated=1.4G(100%)\nWritable regions: Total=1.2G written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=1.2G(100%)\n\n                                VIRTUAL   REGION \nREGION TYPE                        SIZE    COUNT (non-coalesced) \n===========                     =======  ======= \nActivity Tracing                   256K        1 \nColorSync                           68K        3 \nCoreGraphics                         4K        1 \nCoreServices                       148K        1 \nFoundation                          16K        1 \nKernel Alloc Once                    8K        1 \nMALLOC                           543.2M       28 \nMALLOC guard page                   48K       12 \nMemory Tag 253                    32.0G      973 \nMemory Tag 255                     1.3T       78 \nMemory Tag 255 (reserved)          272K        5         reserved VM address space (unallocated)\nPROTECTED_MEMORY                     4K        1 \nSTACK GUARD                       56.1M       31 \nStack                            164.8M       31 \nVM_ALLOCATE                         96K        6 \n__CTF                               824        1 \n__DATA                            34.5M      917 \n__DATA_CONST                     106.4M      937 \n__DATA_DIRTY                      2588K      342 \n__FONT_DATA                        2352        1 \n__INFO_FILTER                         8        1 \n__LINKEDIT                       163.3M        9 \n__OBJC_RO                         61.3M        1 \n__OBJC_RW                         2396K        2 \n__TEXT                             1.2G      954 \n__TPRO_CONST                         16        2 \nmapped file                      220.0M       19 \nshared memory                     1304K       17 \n===========                     =======  ======= \nTOTAL                              1.4T     4376 \nTOTAL, minus reserved VM space     1.4T     4376 \n",
  "legacyInfo" : {
  "threadTriggered" : {
    "name" : "CrBrowserMain",
    "queue" : "com.apple.main-thread"
  }
},
  "logWritingSignature" : "9cc60abca169631a650bae25ae3cbdf41912d0bb",
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

