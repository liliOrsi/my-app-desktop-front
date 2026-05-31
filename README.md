-------------------------------------
Translated Report (Full Report Below)
-------------------------------------

Process:               Gasto Fácil [2497]
Path:                  /Applications/Gasto Fácil.app/Contents/MacOS/Gasto Fácil
Identifier:            com.gastofacil.desktop
Version:               0.1.1 (0.1.1)
Code Type:             X86-64 (Native)
Parent Process:        launchd [1]
User ID:               501

Date/Time:             2026-05-31 16:02:36.2072 -0300
OS Version:            macOS 15.7.2 (24G325)
Report Version:        12
Bridge OS Version:     10.1 (23P1072)
Anonymous UUID:        77F1CCC9-E394-2572-A5D0-FB57FF802010

Sleep/Wake UUID:       F7BB088D-D286-4A22-8B63-880D36BBD75C

Time Awake Since Boot: 6000 seconds
Time Since Wake:       3024 seconds

System Integrity Protection: enabled

Crashed Thread:        0  CrBrowserMain  Dispatch queue: com.apple.main-thread

Exception Type:        EXC_BREAKPOINT (SIGTRAP)
Exception Codes:       0x0000000000000002, 0x0000000000000000

Termination Reason:    Namespace SIGNAL, Code 5 Trace/BPT trap: 5
Terminating Process:   exc handler [2497]

Thread 0 Crashed:: CrBrowserMain Dispatch queue: com.apple.main-thread
0   Electron Framework            	       0x110196a48 v8::BackingStore::MaxByteLength() const + 13144
1   Electron Framework            	       0x112e45115 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 13037653
2   Electron Framework            	       0x112e438b9 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 13031417
3   Electron Framework            	       0x112e437d6 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 13031190
4   Electron Framework            	       0x112e32329 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 12960361
5   Electron Framework            	       0x112e322c8 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 12960264
6   Electron Framework            	       0x112e32dcd v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 12963085
7   Electron Framework            	       0x112e32b18 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 12962392
8   Electron Framework            	       0x112c49476 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 10957750
9   Electron Framework            	       0x112c48fbb v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 10956539
10  Electron Framework            	       0x113248499 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 17245145
11  Electron Framework            	       0x112c48d29 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 10955881
12  Electron Framework            	       0x112c4b525 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 10966117
13  Electron Framework            	       0x112c47548 v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 10949768
14  Electron Framework            	       0x11044ccbe v8::CodeEvent::GetScriptLine() + 518462
15  Electron Framework            	       0x11044dd5d v8::CodeEvent::GetScriptLine() + 522717
16  Electron Framework            	       0x11044dbc1 v8::CodeEvent::GetScriptLine() + 522305
17  Electron Framework            	       0x11044c595 v8::CodeEvent::GetScriptLine() + 516629
18  Electron Framework            	       0x11044c682 v8::CodeEvent::GetScriptLine() + 516866
19  Electron Framework            	       0x1100abfd5 ElectronMain + 245
20  dyld                          	    0x7ff819fe0530 start + 3056

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

Thread 6:
0   libsystem_pthread.dylib       	    0x7ff81a381834 start_wqthread + 0

Thread 7:: ThreadPoolServiceThread
0   libsystem_kernel.dylib        	    0x7ff81a34d54a kevent64 + 10
1   Electron Framework            	       0x113df86e7 ares_dns_rr_get_name + 6056983
2   Electron Framework            	       0x113df846d ares_dns_rr_get_name + 6056349
3   Electron Framework            	       0x113da06f9 ares_dns_rr_get_name + 5696553
4   Electron Framework            	       0x113d60884 ares_dns_rr_get_name + 5434804
5   Electron Framework            	       0x113dc54d8 ares_dns_rr_get_name + 5847560
6   Electron Framework            	       0x113daa71d ares_dns_rr_get_name + 5737549
7   Electron Framework            	       0x113dc569c ares_dns_rr_get_name + 5848012
8   Electron Framework            	       0x113dd8aef ares_dns_rr_get_name + 5926943
9   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
10  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 8:: ThreadPoolForegroundWorker
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x113df2433 ares_dns_rr_get_name + 6031715
5   Electron Framework            	       0x113d78ffc ares_dns_rr_get_name + 5535020
6   Electron Framework            	       0x113dbdc5d ares_dns_rr_get_name + 5816717
7   Electron Framework            	       0x113dbc726 ares_dns_rr_get_name + 5811286
8   Electron Framework            	       0x113dbd324 ares_dns_rr_get_name + 5814356
9   Electron Framework            	       0x113dbcfad ares_dns_rr_get_name + 5813469
10  Electron Framework            	       0x113dbce92 ares_dns_rr_get_name + 5813186
11  Electron Framework            	       0x113dd8aef ares_dns_rr_get_name + 5926943
12  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
13  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 9:: ThreadPoolBackgroundWorker
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x113df2433 ares_dns_rr_get_name + 6031715
5   Electron Framework            	       0x113d78ffc ares_dns_rr_get_name + 5535020
6   Electron Framework            	       0x113dbdc5d ares_dns_rr_get_name + 5816717
7   Electron Framework            	       0x113dbc726 ares_dns_rr_get_name + 5811286
8   Electron Framework            	       0x113dbd324 ares_dns_rr_get_name + 5814356
9   Electron Framework            	       0x113dbcf1d ares_dns_rr_get_name + 5813325
10  Electron Framework            	       0x113dbcec0 ares_dns_rr_get_name + 5813232
11  Electron Framework            	       0x113dd8aef ares_dns_rr_get_name + 5926943
12  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
13  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 10:: ThreadPoolForegroundWorker
0   Electron Framework            	       0x113e33d97 ares_dns_rr_get_name + 6300359
1   Electron Framework            	       0x113e3c46c ares_dns_rr_get_name + 6334876
2   Electron Framework            	       0x113dad1c4 ares_dns_rr_get_name + 5748468
3   Electron Framework            	       0x113dbb486 ares_dns_rr_get_name + 5806518
4   Electron Framework            	       0x113dbb637 ares_dns_rr_get_name + 5806951
5   Electron Framework            	       0x113dbb074 ares_dns_rr_get_name + 5805476
6   Electron Framework            	       0x113da6cd1 ares_dns_rr_get_name + 5722625
7   Electron Framework            	       0x1105f8bbe v8::HeapGraphNode::GetId() const + 1390926
8   Electron Framework            	       0x1105f8a98 v8::HeapGraphNode::GetId() const + 1390632
9   Electron Framework            	       0x1105b790a v8::HeapGraphNode::GetId() const + 1123994
10  Electron Framework            	       0x1105f9b54 v8::HeapGraphNode::GetId() const + 1394916
11  Electron Framework            	       0x1105f9bfa v8::HeapGraphNode::GetId() const + 1395082
12  Electron Framework            	       0x113d7c9a0 ares_dns_rr_get_name + 5549776
13  Electron Framework            	       0x113da991a ares_dns_rr_get_name + 5733962
14  Electron Framework            	       0x113da8dfe ares_dns_rr_get_name + 5731118
15  Electron Framework            	       0x113dbd21f ares_dns_rr_get_name + 5814095
16  Electron Framework            	       0x113dbcfad ares_dns_rr_get_name + 5813469
17  Electron Framework            	       0x113dbce92 ares_dns_rr_get_name + 5813186
18  Electron Framework            	       0x113dd8aef ares_dns_rr_get_name + 5926943
19  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
20  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 11:: Chrome_IOThread
0   libsystem_kernel.dylib        	    0x7ff81a34d54a kevent64 + 10
1   Electron Framework            	       0x113df86e7 ares_dns_rr_get_name + 6056983
2   Electron Framework            	       0x113df846d ares_dns_rr_get_name + 6056349
3   Electron Framework            	       0x113da06f9 ares_dns_rr_get_name + 5696553
4   Electron Framework            	       0x113d60884 ares_dns_rr_get_name + 5434804
5   Electron Framework            	       0x113dc54d8 ares_dns_rr_get_name + 5847560
6   Electron Framework            	       0x112c4c14f v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const + 10969231
7   Electron Framework            	       0x113dc569c ares_dns_rr_get_name + 5848012
8   Electron Framework            	       0x113dd8aef ares_dns_rr_get_name + 5926943
9   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
10  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 12:: MemoryInfra
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   Electron Framework            	       0x113df2433 ares_dns_rr_get_name + 6031715
5   Electron Framework            	       0x113d78ec5 ares_dns_rr_get_name + 5534709
6   Electron Framework            	       0x113d3767a ares_dns_rr_get_name + 5266346
7   Electron Framework            	       0x113da06f9 ares_dns_rr_get_name + 5696553
8   Electron Framework            	       0x113d60884 ares_dns_rr_get_name + 5434804
9   Electron Framework            	       0x113dc54d8 ares_dns_rr_get_name + 5847560
10  Electron Framework            	       0x113dc569c ares_dns_rr_get_name + 5848012
11  Electron Framework            	       0x113dd8aef ares_dns_rr_get_name + 5926943
12  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
13  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 13:
0   libsystem_kernel.dylib        	    0x7ff81a348822 kevent + 10
1   Electron Framework            	       0x1100ab678 uv_free_interface_addresses + 1768
2   Electron Framework            	       0x110099c05 uv_run + 485
3   Electron Framework            	       0x1180c82e1 node::OnFatalError(char const*, char const*) + 515761
4   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
5   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 14:
0   libsystem_kernel.dylib        	    0x7ff81a3466f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff81a3862ae _pthread_cond_wait + 988
2   Electron Framework            	       0x1100a69e9 uv_cond_wait + 9
3   Electron Framework            	       0x1180c8549 node::OnFatalError(char const*, char const*) + 516377
4   Electron Framework            	       0x1180c62bb node::OnFatalError(char const*, char const*) + 507531
5   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
6   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 15:
0   libsystem_kernel.dylib        	    0x7ff81a3466f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff81a3862ae _pthread_cond_wait + 988
2   Electron Framework            	       0x1100a69e9 uv_cond_wait + 9
3   Electron Framework            	       0x1180c8549 node::OnFatalError(char const*, char const*) + 516377
4   Electron Framework            	       0x1180c62bb node::OnFatalError(char const*, char const*) + 507531
5   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
6   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 16:
0   libsystem_kernel.dylib        	    0x7ff81a3466f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	    0x7ff81a3862ae _pthread_cond_wait + 988
2   Electron Framework            	       0x1100a69e9 uv_cond_wait + 9
3   Electron Framework            	       0x1180c8549 node::OnFatalError(char const*, char const*) + 516377
4   Electron Framework            	       0x1180c62bb node::OnFatalError(char const*, char const*) + 507531
5   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
6   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 17:
0   libsystem_kernel.dylib        	    0x7ff81a343ac6 semaphore_wait_trap + 10
1   Electron Framework            	       0x1100a6880 uv_sem_wait + 16
2   Electron Framework            	       0x1181a6e7c node::SetTracingController(v8::TracingController*) + 206540
3   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
4   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 18:: NetworkConfigWatcher
0   Electron Framework            	       0x1184f2112 DYLD-STUB$$os_unfair_lock_trylock + 0
1   Electron Framework            	       0x113e312b5 ares_dns_rr_get_name + 6289381
2   Electron Framework            	       0x113e33d97 ares_dns_rr_get_name + 6300359
3   Electron Framework            	       0x113e3c46c ares_dns_rr_get_name + 6334876
4   libsystem_info.dylib          	    0x7ff81a3cc087 getifaddrs + 659
5   libsystem_info.dylib          	    0x7ff81a3cdf3e if_nametoindex + 27
6   Electron Framework            	       0x11431e179 ares_dns_rr_get_name + 11454121
7   Electron Framework            	       0x11431e317 ares_dns_rr_get_name + 11454535
8   Electron Framework            	       0x114156c79 ares_dns_rr_get_name + 9589161
9   Electron Framework            	       0x11430c803 ares_dns_rr_get_name + 11382067
10  Electron Framework            	       0x11430e901 ares_dns_rr_get_name + 11390513
11  Electron Framework            	       0x113dc55f5 ares_dns_rr_get_name + 5847845
12  Electron Framework            	       0x113dd8aef ares_dns_rr_get_name + 5926943
13  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
14  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 19:: CrShutdownDetector
0   libsystem_kernel.dylib        	    0x7ff81a3445b2 read + 10
1   Electron Framework            	       0x1102c754c v8::CodeEvent::GetFunctionName() + 35468
2   Electron Framework            	       0x113dd8aef ares_dns_rr_get_name + 5926943
3   libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
4   libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 20:: NetworkConfigWatcher
0   libsystem_kernel.dylib        	    0x7ff81a343b4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	    0x7ff81a352704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	    0x7ff81a34abc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	    0x7ff81a343e3b mach_msg + 19
4   CoreFoundation                	    0x7ff81a46fb82 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff81a46e5cf __CFRunLoopRun + 1430
6   CoreFoundation                	    0x7ff81a46da02 CFRunLoopRunSpecific + 536
7   Foundation                    	    0x7ff81b5b1ff3 -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 216
8   Electron Framework            	       0x113def4ea ares_dns_rr_get_name + 6019610
9   Electron Framework            	       0x113ded932 ares_dns_rr_get_name + 6012514
10  Electron Framework            	       0x113da06f9 ares_dns_rr_get_name + 5696553
11  Electron Framework            	       0x113d60884 ares_dns_rr_get_name + 5434804
12  Electron Framework            	       0x113dc54d8 ares_dns_rr_get_name + 5847560
13  Electron Framework            	       0x113dc569c ares_dns_rr_get_name + 5848012
14  Electron Framework            	       0x113dd8aef ares_dns_rr_get_name + 5926943
15  libsystem_pthread.dylib       	    0x7ff81a385e05 _pthread_start + 115
16  libsystem_pthread.dylib       	    0x7ff81a381857 thread_start + 15

Thread 21:
0   libsystem_pthread.dylib       	    0x7ff81a381848 thread_start + 0


Thread 0 crashed with X86 Thread State (64-bit):
  rax: 0x0000000000000000  rbx: 0x00007ff7ba7531d8  rcx: 0x0000000000000071  rdx: 0x000000000000007c
  rdi: 0x00007ff7ba753240  rsi: 0x00007ff7ba753260  rbp: 0x00007ff7ba7532e0  rsp: 0x00007ff7ba7531d0
   r8: 0x000000000000006e   r9: 0x0000000000000320  r10: 0x0000000000000002  r11: 0x00007ebbba6ec081
  r12: 0xaaaaaaaaaaaaaaaa  r13: 0x0000013c00049680  r14: 0x00007ff7ba753260  r15: 0x0000013c02f9e700
  rip: 0x0000000110196a48  rfl: 0x0000000000000246  cr2: 0x0000000000000000
  
Logical CPU:     2
Error Code:      0x00000000 
Trap Number:     3

Thread 0 instruction stream:
  85 60 ff ff ff 01 74 0c-48 8b bd 70 ff ff ff e8  .`....t.H..p....
  84 4e ca 03 48 8b 5d 80-48 85 db 0f 84 8f fc ff  .N..H.].H.......
  ff 4c 8b 75 88 48 89 df-49 39 de 0f 84 81 fe ff  .L.u.H..I9......
  ff 49 83 c6 e8 eb 19 49-8b 7e 10 e8 58 4e ca 03  .I.....I.~..XN..
  49 8d 46 e8 49 39 de 49-89 c6 0f 84 5e fe ff ff  I.F.I9.I....^...
  4d 85 f6 74 08 41 f6 06-01 74 e5 eb da 0f 0b cc  M..t.A...t......
 [eb]fb 66 0f 1f 44 00 00-55 48 89 e5 41 57 41 56  ..f..D..UH..AWAV	<==
  53 50 48 89 fb 48 b8 aa-aa aa aa aa aa aa aa 4c  SPH..H.........L
  8d 75 e0 49 89 06 4c 89-f7 e8 8a 77 b8 03 45 31  .u.I..L....w..E1
  ff 4c 89 7b 10 0f 57 c0-0f 11 03 49 8b 3e 48 8d  .L.{..W....I.>H.
  35 12 0f c3 08 ba 0e 00-00 00 48 89 d9 e8 a6 77  5.........H....w
  b8 03 49 8b 3e 4d 89 3e-48 85 ff 74 05 e8 26 b8  ..I.>M.>H..t..&.

Binary Images:
       0x1057ab000 -        0x1057acfff com.gastofacil.desktop (0.1.1) <4c4c447f-5555-3144-a1dd-faef3c344812> /Applications/Gasto Fácil.app/Contents/MacOS/Gasto Fácil
       0x10fc95000 -        0x11996bfff com.github.Electron.framework (*) <4c4c44c2-5555-3144-a1bf-d483acb47836> /Applications/Gasto Fácil.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Electron Framework
       0x1057d3000 -        0x1057e7fff com.github.Squirrel (1.0) <4c4c4476-5555-3144-a186-fb1115cc5f6d> /Applications/Gasto Fácil.app/Contents/Frameworks/Squirrel.framework/Versions/A/Squirrel
       0x10584d000 -        0x10588efff com.electron.reactive (3.1.0) <4c4c4455-5555-3144-a11d-71198949c016> /Applications/Gasto Fácil.app/Contents/Frameworks/ReactiveObjC.framework/Versions/A/ReactiveObjC
       0x1057f2000 -        0x1057fdfff org.mantle.Mantle (1.0) <4c4c4415-5555-3144-a125-65c56041fe04> /Applications/Gasto Fácil.app/Contents/Frameworks/Mantle.framework/Versions/A/Mantle
       0x105af0000 -        0x105cf9fff libffmpeg.dylib (*) <4c4c443c-5555-3144-a1fc-29b6b2fc6a9d> /Applications/Gasto Fácil.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libffmpeg.dylib
       0x10ea7d000 -        0x10ea89fff libobjc-trampolines.dylib (*) <72642d3c-0206-38ee-9349-c720aee663ee> /usr/lib/libobjc-trampolines.dylib
    0x7ff819fda000 -     0x7ff81a0746c7 dyld (*) <6b5ca9e7-21aa-36e9-9006-99ad808b943b> /usr/lib/dyld
               0x0 - 0xffffffffffffffff ??? (*) <00000000-0000-0000-0000-000000000000> ???
    0x7ff81a380000 -     0x7ff81a38bfd7 libsystem_pthread.dylib (*) <a031f066-4daa-3801-9155-88106d874835> /usr/lib/system/libsystem_pthread.dylib
    0x7ff81a343000 -     0x7ff81a37fb6f libsystem_kernel.dylib (*) <482d57d2-374a-3244-84d0-d09d58d29b2e> /usr/lib/system/libsystem_kernel.dylib
    0x7ff81a3c5000 -     0x7ff81a3f3477 libsystem_info.dylib (*) <cd7c41c5-ce28-3129-9b0e-b8d126b2a0c5> /usr/lib/system/libsystem_info.dylib
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
ReadOnly portion of Libraries: Total=1.3G resident=0K(0%) swapped_out_or_unallocated=1.3G(100%)
Writable regions: Total=1.2G written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=1.2G(100%)

                                VIRTUAL   REGION 
REGION TYPE                        SIZE    COUNT (non-coalesced) 
===========                     =======  ======= 
Activity Tracing                   256K        1 
ColorSync                           12K        2 
CoreGraphics                         4K        1 
CoreServices                       192K        1 
Foundation                          16K        1 
IOKit                             7940K        1 
Kernel Alloc Once                    8K        1 
MALLOC                           536.2M       28 
MALLOC guard page                   48K       12 
Memory Tag 253                    32.0G      941 
Memory Tag 255                     1.1T       66 
Memory Tag 255 (reserved)          464K        8         reserved VM address space (unallocated)
STACK GUARD                       56.1M       22 
Stack                            115.2M       22 
VM_ALLOCATE                         72K        3 
__CTF                               824        1 
__DATA                            34.5M      915 
__DATA_CONST                     106.4M      936 
__DATA_DIRTY                      2588K      342 
__FONT_DATA                        2352        1 
__INFO_FILTER                         8        1 
__LINKEDIT                       163.2M        9 
__OBJC_RO                         61.3M        1 
__OBJC_RW                         2396K        2 
__TEXT                             1.2G      953 
__TPRO_CONST                         16        2 
mapped file                      212.6M       19 
shared memory                     1304K       17 
===========                     =======  ======= 
TOTAL                              1.1T     4309 
TOTAL, minus reserved VM space     1.1T     4309 



-----------
Full Report
-----------

{"app_name":"Gasto Fácil","timestamp":"2026-05-31 16:02:41.00 -0300","app_version":"0.1.1","slice_uuid":"4c4c447f-5555-3144-a1dd-faef3c344812","build_version":"0.1.1","platform":1,"bundleID":"com.gastofacil.desktop","share_with_app_devs":0,"is_first_party":0,"bug_type":"309","os_version":"macOS 15.7.2 (24G325)","roots_installed":0,"name":"Gasto Fácil","incident_id":"20299F3F-2453-4BBC-930B-A3452A1BBD7D"}
{
  "uptime" : 6000,
  "procRole" : "Foreground",
  "version" : 2,
  "userID" : 501,
  "deployVersion" : 210,
  "modelCode" : "MacBookAir9,1",
  "coalitionID" : 2883,
  "osVersion" : {
    "train" : "macOS 15.7.2",
    "build" : "24G325",
    "releaseType" : "User"
  },
  "captureTime" : "2026-05-31 16:02:36.2072 -0300",
  "codeSigningMonitor" : 0,
  "incident" : "20299F3F-2453-4BBC-930B-A3452A1BBD7D",
  "pid" : 2497,
  "cpuType" : "X86-64",
  "roots_installed" : 0,
  "bug_type" : "309",
  "procLaunch" : "2026-05-31 16:02:21.9557 -0300",
  "procStartAbsTime" : 6049385552978,
  "procExitAbsTime" : 6063630250046,
  "procName" : "Gasto Fácil",
  "procPath" : "\/Applications\/Gasto Fácil.app\/Contents\/MacOS\/Gasto Fácil",
  "bundleInfo" : {"CFBundleShortVersionString":"0.1.1","CFBundleVersion":"0.1.1","CFBundleIdentifier":"com.gastofacil.desktop"},
  "storeInfo" : {"deviceIdentifierForVendor":"E59A174F-C882-587D-B27D-EEE3A673011A","thirdParty":true},
  "parentProc" : "launchd",
  "parentPid" : 1,
  "coalitionName" : "com.gastofacil.desktop",
  "crashReporterKey" : "77F1CCC9-E394-2572-A5D0-FB57FF802010",
  "appleIntelligenceStatus" : {"reasons":["deviceNotCapable"],"state":"unavailable"},
  "codeSigningID" : "",
  "codeSigningTeamID" : "",
  "codeSigningValidationCategory" : 0,
  "codeSigningTrustLevel" : 4294967295,
  "codeSigningAuxiliaryInfo" : 0,
  "bootSessionUUID" : "909BDF01-86D0-4E86-98C9-40776E14C259",
  "wakeTime" : 3024,
  "bridgeVersion" : {"build":"23P1072","train":"10.1"},
  "sleepWakeUUID" : "F7BB088D-D286-4A22-8B63-880D36BBD75C",
  "sip" : "enabled",
  "exception" : {"codes":"0x0000000000000002, 0x0000000000000000","rawCodes":[2,0],"type":"EXC_BREAKPOINT","signal":"SIGTRAP"},
  "termination" : {"flags":0,"code":5,"namespace":"SIGNAL","indicator":"Trace\/BPT trap: 5","byProc":"exc handler","byPid":2497},
  "os_fault" : {"process":"Gasto Fácil"},
  "extMods" : {"caller":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"system":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"targeted":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"warnings":0},
  "faultingThread" : 0,
  "threads" : [{"queue":"com.apple.main-thread","instructionState":{"instructionStream":{"bytes":[133,96,255,255,255,1,116,12,72,139,189,112,255,255,255,232,132,78,202,3,72,139,93,128,72,133,219,15,132,143,252,255,255,76,139,117,136,72,137,223,73,57,222,15,132,129,254,255,255,73,131,198,232,235,25,73,139,126,16,232,88,78,202,3,73,141,70,232,73,57,222,73,137,198,15,132,94,254,255,255,77,133,246,116,8,65,246,6,1,116,229,235,218,15,11,204,235,251,102,15,31,68,0,0,85,72,137,229,65,87,65,86,83,80,72,137,251,72,184,170,170,170,170,170,170,170,170,76,141,117,224,73,137,6,76,137,247,232,138,119,184,3,69,49,255,76,137,123,16,15,87,192,15,17,3,73,139,62,72,141,53,18,15,195,8,186,14,0,0,0,72,137,217,232,166,119,184,3,73,139,62,77,137,62,72,133,255,116,5,232,38,184],"offset":96}},"frames":[{"imageOffset":5249608,"symbol":"v8::BackingStore::MaxByteLength() const","symbolLocation":13144,"imageIndex":1},{"imageOffset":52101397,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":13037653,"imageIndex":1},{"imageOffset":52095161,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":13031417,"imageIndex":1},{"imageOffset":52094934,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":13031190,"imageIndex":1},{"imageOffset":52024105,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":12960361,"imageIndex":1},{"imageOffset":52024008,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":12960264,"imageIndex":1},{"imageOffset":52026829,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":12963085,"imageIndex":1},{"imageOffset":52026136,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":12962392,"imageIndex":1},{"imageOffset":50021494,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":10957750,"imageIndex":1},{"imageOffset":50020283,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":10956539,"imageIndex":1},{"imageOffset":56308889,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":17245145,"imageIndex":1},{"imageOffset":50019625,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":10955881,"imageIndex":1},{"imageOffset":50029861,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":10966117,"imageIndex":1},{"imageOffset":50013512,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":10949768,"imageIndex":1},{"imageOffset":8092862,"symbol":"v8::CodeEvent::GetScriptLine()","symbolLocation":518462,"imageIndex":1},{"imageOffset":8097117,"symbol":"v8::CodeEvent::GetScriptLine()","symbolLocation":522717,"imageIndex":1},{"imageOffset":8096705,"symbol":"v8::CodeEvent::GetScriptLine()","symbolLocation":522305,"imageIndex":1},{"imageOffset":8091029,"symbol":"v8::CodeEvent::GetScriptLine()","symbolLocation":516629,"imageIndex":1},{"imageOffset":8091266,"symbol":"v8::CodeEvent::GetScriptLine()","symbolLocation":516866,"imageIndex":1},{"imageOffset":4288469,"symbol":"ElectronMain","symbolLocation":245,"imageIndex":1},{"imageOffset":25904,"symbol":"start","symbolLocation":3056,"imageIndex":7}],"id":95838,"triggered":true,"threadState":{"r13":{"value":1357209966208},"rax":{"value":0},"rflags":{"value":582},"cpu":{"value":2},"r14":{"value":140701961892448},"rsi":{"value":140701961892448},"r8":{"value":110},"cr2":{"value":0},"rdx":{"value":124},"r10":{"value":2},"r9":{"value":800},"r15":{"value":1357259597568},"rbx":{"value":140701961892312},"trap":{"value":3},"err":{"value":0},"r11":{"value":139344751804545},"rip":{"value":4565068360,"matchesCrashFrame":1},"rbp":{"value":140701961892576},"rsp":{"value":140701961892304},"r12":{"value":12297829382473034410},"rcx":{"value":113},"flavor":"x86_THREAD_STATE","rdi":{"value":140701961892416}},"name":"CrBrowserMain"},{"id":96035,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":5379},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145316683776},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145317206904},"rbx":{"value":123145317208064},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145317208064},"r12":{"value":5193734},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145317208064}}},{"id":96036,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":5891},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145317220352},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145317743480},"rbx":{"value":123145317744640},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145317744640},"r12":{"value":5193733},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145317744640}}},{"id":96116,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":19731},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145317756928},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145318280056},"rbx":{"value":123145318281216},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145318281216},"r12":{"value":5193732},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145318281216}}},{"id":96129,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":32263},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145318293504},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145318816632},"rbx":{"value":123145318817792},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145318817792},"r12":{"value":5193734},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145318817792}}},{"id":96149,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":22019},"r8":{"value":409603},"cr2":{"value":0},"rdx":{"value":123145318830080},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":123145319354368},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145319354368},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145319354368}}},{"id":96150,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":22275},"r8":{"value":409602},"cr2":{"value":0},"rdx":{"value":123145319366656},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":123145319890944},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":140703568500788},"rbp":{"value":0},"rsp":{"value":123145319890944},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145319890944}}},{"id":96154,"name":"ThreadPoolServiceThread","threadState":{"r13":{"value":1340030794608},"rax":{"value":1},"rflags":{"value":582},"cpu":{"value":0},"r14":{"value":1340030489280},"rsi":{"value":0},"r8":{"value":3},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":1357210470480},"r9":{"value":0},"r15":{"value":0},"rbx":{"value":2147483648},"trap":{"value":133},"err":{"value":33554801},"r11":{"value":582},"rip":{"value":140703568287050},"rbp":{"value":123145328827776},"rsp":{"value":123145328827592},"r12":{"value":123145328827792},"rcx":{"value":123145328827592},"flavor":"x86_THREAD_STATE","rdi":{"value":5}},"frames":[{"imageOffset":42314,"symbol":"kevent64","symbolLocation":10,"imageIndex":10},{"imageOffset":68564711,"symbol":"ares_dns_rr_get_name","symbolLocation":6056983,"imageIndex":1},{"imageOffset":68564077,"symbol":"ares_dns_rr_get_name","symbolLocation":6056349,"imageIndex":1},{"imageOffset":68204281,"symbol":"ares_dns_rr_get_name","symbolLocation":5696553,"imageIndex":1},{"imageOffset":67942532,"symbol":"ares_dns_rr_get_name","symbolLocation":5434804,"imageIndex":1},{"imageOffset":68355288,"symbol":"ares_dns_rr_get_name","symbolLocation":5847560,"imageIndex":1},{"imageOffset":68245277,"symbol":"ares_dns_rr_get_name","symbolLocation":5737549,"imageIndex":1},{"imageOffset":68355740,"symbol":"ares_dns_rr_get_name","symbolLocation":5848012,"imageIndex":1},{"imageOffset":68434671,"symbol":"ares_dns_rr_get_name","symbolLocation":5926943,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":96155,"name":"ThreadPoolForegroundWorker","threadState":{"r13":{"value":17179869442},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":115461605818368},"rsi":{"value":17179869442},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":115461605818368},"r9":{"value":115461605818368},"r15":{"value":32},"rbx":{"value":123145337228544},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145337227872},"rsp":{"value":123145337227768},"r12":{"value":115461605818368},"rcx":{"value":123145337227768},"flavor":"x86_THREAD_STATE","rdi":{"value":123145337228544}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":10},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":10},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":10},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":10},{"imageOffset":68539443,"symbol":"ares_dns_rr_get_name","symbolLocation":6031715,"imageIndex":1},{"imageOffset":68042748,"symbol":"ares_dns_rr_get_name","symbolLocation":5535020,"imageIndex":1},{"imageOffset":68324445,"symbol":"ares_dns_rr_get_name","symbolLocation":5816717,"imageIndex":1},{"imageOffset":68319014,"symbol":"ares_dns_rr_get_name","symbolLocation":5811286,"imageIndex":1},{"imageOffset":68322084,"symbol":"ares_dns_rr_get_name","symbolLocation":5814356,"imageIndex":1},{"imageOffset":68321197,"symbol":"ares_dns_rr_get_name","symbolLocation":5813469,"imageIndex":1},{"imageOffset":68320914,"symbol":"ares_dns_rr_get_name","symbolLocation":5813186,"imageIndex":1},{"imageOffset":68434671,"symbol":"ares_dns_rr_get_name","symbolLocation":5926943,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":96156,"name":"ThreadPoolBackgroundWorker","threadState":{"r13":{"value":17179869442},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":142949396512768},"rsi":{"value":17179869442},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":142949396512768},"r9":{"value":142949396512768},"r15":{"value":32},"rbx":{"value":123145345629440},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145345628768},"rsp":{"value":123145345628664},"r12":{"value":142949396512768},"rcx":{"value":123145345628664},"flavor":"x86_THREAD_STATE","rdi":{"value":123145345629440}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":10},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":10},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":10},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":10},{"imageOffset":68539443,"symbol":"ares_dns_rr_get_name","symbolLocation":6031715,"imageIndex":1},{"imageOffset":68042748,"symbol":"ares_dns_rr_get_name","symbolLocation":5535020,"imageIndex":1},{"imageOffset":68324445,"symbol":"ares_dns_rr_get_name","symbolLocation":5816717,"imageIndex":1},{"imageOffset":68319014,"symbol":"ares_dns_rr_get_name","symbolLocation":5811286,"imageIndex":1},{"imageOffset":68322084,"symbol":"ares_dns_rr_get_name","symbolLocation":5814356,"imageIndex":1},{"imageOffset":68321053,"symbol":"ares_dns_rr_get_name","symbolLocation":5813325,"imageIndex":1},{"imageOffset":68320960,"symbol":"ares_dns_rr_get_name","symbolLocation":5813232,"imageIndex":1},{"imageOffset":68434671,"symbol":"ares_dns_rr_get_name","symbolLocation":5926943,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":96157,"name":"ThreadPoolForegroundWorker","threadState":{"r13":{"value":520},"rax":{"value":1},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":16384},"rsi":{"value":0},"r8":{"value":4731279872},"cr2":{"value":0},"rdx":{"value":16384},"r10":{"value":26631},"r9":{"value":8000},"r15":{"value":1340034156544},"rbx":{"value":4731279936},"trap":{"value":222},"err":{"value":0},"r11":{"value":514},"rip":{"value":4628626839},"rbp":{"value":123145354028096},"rsp":{"value":123145354027984},"r12":{"value":4731281096},"rcx":{"value":43011},"flavor":"x86_THREAD_STATE","rdi":{"value":4731279936}},"frames":[{"imageOffset":68808087,"symbol":"ares_dns_rr_get_name","symbolLocation":6300359,"imageIndex":1},{"imageOffset":68842604,"symbol":"ares_dns_rr_get_name","symbolLocation":6334876,"imageIndex":1},{"imageOffset":68256196,"symbol":"ares_dns_rr_get_name","symbolLocation":5748468,"imageIndex":1},{"imageOffset":68314246,"symbol":"ares_dns_rr_get_name","symbolLocation":5806518,"imageIndex":1},{"imageOffset":68314679,"symbol":"ares_dns_rr_get_name","symbolLocation":5806951,"imageIndex":1},{"imageOffset":68313204,"symbol":"ares_dns_rr_get_name","symbolLocation":5805476,"imageIndex":1},{"imageOffset":68230353,"symbol":"ares_dns_rr_get_name","symbolLocation":5722625,"imageIndex":1},{"imageOffset":9845694,"symbol":"v8::HeapGraphNode::GetId() const","symbolLocation":1390926,"imageIndex":1},{"imageOffset":9845400,"symbol":"v8::HeapGraphNode::GetId() const","symbolLocation":1390632,"imageIndex":1},{"imageOffset":9578762,"symbol":"v8::HeapGraphNode::GetId() const","symbolLocation":1123994,"imageIndex":1},{"imageOffset":9849684,"symbol":"v8::HeapGraphNode::GetId() const","symbolLocation":1394916,"imageIndex":1},{"imageOffset":9849850,"symbol":"v8::HeapGraphNode::GetId() const","symbolLocation":1395082,"imageIndex":1},{"imageOffset":68057504,"symbol":"ares_dns_rr_get_name","symbolLocation":5549776,"imageIndex":1},{"imageOffset":68241690,"symbol":"ares_dns_rr_get_name","symbolLocation":5733962,"imageIndex":1},{"imageOffset":68238846,"symbol":"ares_dns_rr_get_name","symbolLocation":5731118,"imageIndex":1},{"imageOffset":68321823,"symbol":"ares_dns_rr_get_name","symbolLocation":5814095,"imageIndex":1},{"imageOffset":68321197,"symbol":"ares_dns_rr_get_name","symbolLocation":5813469,"imageIndex":1},{"imageOffset":68320914,"symbol":"ares_dns_rr_get_name","symbolLocation":5813186,"imageIndex":1},{"imageOffset":68434671,"symbol":"ares_dns_rr_get_name","symbolLocation":5926943,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":96158,"name":"Chrome_IOThread","threadState":{"r13":{"value":1340030786288},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1340030496320},"rsi":{"value":0},"r8":{"value":1},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":1340031247472},"r9":{"value":0},"r15":{"value":0},"rbx":{"value":2147483648},"trap":{"value":133},"err":{"value":33554801},"r11":{"value":582},"rip":{"value":140703568287050},"rbp":{"value":123145362431328},"rsp":{"value":123145362431144},"r12":{"value":123145362431344},"rcx":{"value":123145362431144},"flavor":"x86_THREAD_STATE","rdi":{"value":6}},"frames":[{"imageOffset":42314,"symbol":"kevent64","symbolLocation":10,"imageIndex":10},{"imageOffset":68564711,"symbol":"ares_dns_rr_get_name","symbolLocation":6056983,"imageIndex":1},{"imageOffset":68564077,"symbol":"ares_dns_rr_get_name","symbolLocation":6056349,"imageIndex":1},{"imageOffset":68204281,"symbol":"ares_dns_rr_get_name","symbolLocation":5696553,"imageIndex":1},{"imageOffset":67942532,"symbol":"ares_dns_rr_get_name","symbolLocation":5434804,"imageIndex":1},{"imageOffset":68355288,"symbol":"ares_dns_rr_get_name","symbolLocation":5847560,"imageIndex":1},{"imageOffset":50032975,"symbol":"v8::internal::compiler::CompilationDependencies::FieldTypeDependencyOffTheRecord(v8::internal::compiler::MapRef, v8::internal::compiler::MapRef, v8::internal::InternalIndex, v8::internal::compiler::ObjectRef) const","symbolLocation":10969231,"imageIndex":1},{"imageOffset":68355740,"symbol":"ares_dns_rr_get_name","symbolLocation":5848012,"imageIndex":1},{"imageOffset":68434671,"symbol":"ares_dns_rr_get_name","symbolLocation":5926943,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":96159,"name":"MemoryInfra","threadState":{"r13":{"value":17179869186},"rax":{"value":268451845},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":175934745346048},"rsi":{"value":17179869186},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":175934745346048},"r9":{"value":175934745346048},"r15":{"value":32},"rbx":{"value":123145370832032},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":514},"rip":{"value":140703568247626},"rbp":{"value":123145370831360},"rsp":{"value":123145370831256},"r12":{"value":175934745346048},"rcx":{"value":123145370831256},"flavor":"x86_THREAD_STATE","rdi":{"value":123145370832032}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":10},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":10},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":10},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":10},{"imageOffset":68539443,"symbol":"ares_dns_rr_get_name","symbolLocation":6031715,"imageIndex":1},{"imageOffset":68042437,"symbol":"ares_dns_rr_get_name","symbolLocation":5534709,"imageIndex":1},{"imageOffset":67774074,"symbol":"ares_dns_rr_get_name","symbolLocation":5266346,"imageIndex":1},{"imageOffset":68204281,"symbol":"ares_dns_rr_get_name","symbolLocation":5696553,"imageIndex":1},{"imageOffset":67942532,"symbol":"ares_dns_rr_get_name","symbolLocation":5434804,"imageIndex":1},{"imageOffset":68355288,"symbol":"ares_dns_rr_get_name","symbolLocation":5847560,"imageIndex":1},{"imageOffset":68355740,"symbol":"ares_dns_rr_get_name","symbolLocation":5848012,"imageIndex":1},{"imageOffset":68434671,"symbol":"ares_dns_rr_get_name","symbolLocation":5926943,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":96161,"frames":[{"imageOffset":22562,"symbol":"kevent","symbolLocation":10,"imageIndex":10},{"imageOffset":4286072,"symbol":"uv_free_interface_addresses","symbolLocation":1768,"imageIndex":1},{"imageOffset":4213765,"symbol":"uv_run","symbolLocation":485,"imageIndex":1},{"imageOffset":138621665,"symbol":"node::OnFatalError(char const*, char const*)","symbolLocation":515761,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}],"threadState":{"r13":{"value":4294967295},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":123145379200752},"r8":{"value":1024},"cr2":{"value":0},"rdx":{"value":1},"r10":{"value":123145379200752},"r9":{"value":0},"r15":{"value":1357209685760},"rbx":{"value":0},"trap":{"value":133},"err":{"value":33554795},"r11":{"value":582},"rip":{"value":140703568267298},"rbp":{"value":123145379233568},"rsp":{"value":123145379200600},"r12":{"value":1357209685224},"rcx":{"value":123145379200600},"flavor":"x86_THREAD_STATE","rdi":{"value":15}}},{"id":96162,"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":10},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":9},{"imageOffset":4266473,"symbol":"uv_cond_wait","symbolLocation":9,"imageIndex":1},{"imageOffset":138622281,"symbol":"node::OnFatalError(char const*, char const*)","symbolLocation":516377,"imageIndex":1},{"imageOffset":138613435,"symbol":"node::OnFatalError(char const*, char const*)","symbolLocation":507531,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}],"threadState":{"r13":{"value":27487790701568},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1357211010264},"rsi":{"value":27487790701568},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":6400},"r10":{"value":0},"r9":{"value":160},"r15":{"value":6400},"rbx":{"value":123145387634688},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":140703568258806},"rbp":{"value":123145387634480},"rsp":{"value":123145387634328},"r12":{"value":123145387634352},"rcx":{"value":123145387634328},"flavor":"x86_THREAD_STATE","rdi":{"value":1357211010264}}},{"id":96163,"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":10},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":9},{"imageOffset":4266473,"symbol":"uv_cond_wait","symbolLocation":9,"imageIndex":1},{"imageOffset":138622281,"symbol":"node::OnFatalError(char const*, char const*)","symbolLocation":516377,"imageIndex":1},{"imageOffset":138613435,"symbol":"node::OnFatalError(char const*, char const*)","symbolLocation":507531,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}],"threadState":{"r13":{"value":29686813957632},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1357211010264},"rsi":{"value":29686813957632},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":6912},"r10":{"value":0},"r9":{"value":160},"r15":{"value":6912},"rbx":{"value":123145396035584},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":140703568258806},"rbp":{"value":123145396035376},"rsp":{"value":123145396035224},"r12":{"value":123145396035248},"rcx":{"value":123145396035224},"flavor":"x86_THREAD_STATE","rdi":{"value":1357211010264}}},{"id":96164,"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":10},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":9},{"imageOffset":4266473,"symbol":"uv_cond_wait","symbolLocation":9,"imageIndex":1},{"imageOffset":138622281,"symbol":"node::OnFatalError(char const*, char const*)","symbolLocation":516377,"imageIndex":1},{"imageOffset":138613435,"symbol":"node::OnFatalError(char const*, char const*)","symbolLocation":507531,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}],"threadState":{"r13":{"value":28587302329600},"rax":{"value":260},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":1357211010264},"rsi":{"value":28587302329600},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":6656},"r10":{"value":0},"r9":{"value":160},"r15":{"value":6656},"rbx":{"value":123145404436480},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":140703568258806},"rbp":{"value":123145404436272},"rsp":{"value":123145404436120},"r12":{"value":123145404436144},"rcx":{"value":123145404436120},"flavor":"x86_THREAD_STATE","rdi":{"value":1357211010264}}},{"id":96172,"frames":[{"imageOffset":2758,"symbol":"semaphore_wait_trap","symbolLocation":10,"imageIndex":10},{"imageOffset":4266112,"symbol":"uv_sem_wait","symbolLocation":16,"imageIndex":1},{"imageOffset":139533948,"symbol":"node::SetTracingController(v8::TracingController*)","symbolLocation":206540,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":14},"rflags":{"value":582},"cpu":{"value":0},"r14":{"value":4731996360},"rsi":{"value":39939},"r8":{"value":123145319936000},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":39940},"r9":{"value":419432703},"r15":{"value":0},"rbx":{"value":4731996556},"trap":{"value":133},"err":{"value":16777252},"r11":{"value":582},"rip":{"value":140703568247494},"rbp":{"value":123145319935888},"rsp":{"value":123145319935864},"r12":{"value":0},"rcx":{"value":123145319935864},"flavor":"x86_THREAD_STATE","rdi":{"value":36611}}},{"id":96194,"name":"NetworkConfigWatcher","threadState":{"r13":{"value":4904},"rax":{"value":0},"rflags":{"value":643},"cpu":{"value":0},"r14":{"value":2},"rsi":{"value":1},"r8":{"value":4731279872},"cr2":{"value":0},"rdx":{"value":16384},"r10":{"value":1357215090004},"r9":{"value":33},"r15":{"value":1},"rbx":{"value":4731279936},"trap":{"value":222},"err":{"value":0},"r11":{"value":17},"rip":{"value":4702806290},"rbp":{"value":123145412835488},"rsp":{"value":123145412835448},"r12":{"value":16},"rcx":{"value":38659},"flavor":"x86_THREAD_STATE","rdi":{"value":4731279936}},"frames":[{"imageOffset":142987538,"symbol":"DYLD-STUB$$os_unfair_lock_trylock","symbolLocation":0,"imageIndex":1},{"imageOffset":68797109,"symbol":"ares_dns_rr_get_name","symbolLocation":6289381,"imageIndex":1},{"imageOffset":68808087,"symbol":"ares_dns_rr_get_name","symbolLocation":6300359,"imageIndex":1},{"imageOffset":68842604,"symbol":"ares_dns_rr_get_name","symbolLocation":6334876,"imageIndex":1},{"imageOffset":28807,"symbol":"getifaddrs","symbolLocation":659,"imageIndex":11},{"imageOffset":36670,"symbol":"if_nametoindex","symbolLocation":27,"imageIndex":11},{"imageOffset":73961849,"symbol":"ares_dns_rr_get_name","symbolLocation":11454121,"imageIndex":1},{"imageOffset":73962263,"symbol":"ares_dns_rr_get_name","symbolLocation":11454535,"imageIndex":1},{"imageOffset":72096889,"symbol":"ares_dns_rr_get_name","symbolLocation":9589161,"imageIndex":1},{"imageOffset":73889795,"symbol":"ares_dns_rr_get_name","symbolLocation":11382067,"imageIndex":1},{"imageOffset":73898241,"symbol":"ares_dns_rr_get_name","symbolLocation":11390513,"imageIndex":1},{"imageOffset":68355573,"symbol":"ares_dns_rr_get_name","symbolLocation":5847845,"imageIndex":1},{"imageOffset":68434671,"symbol":"ares_dns_rr_get_name","symbolLocation":5926943,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":96195,"name":"CrShutdownDetector","threadState":{"r13":{"value":0},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":123145319964200},"rsi":{"value":123145319964200},"r8":{"value":123145319964129},"cr2":{"value":0},"rdx":{"value":4},"r10":{"value":1},"r9":{"value":18},"r15":{"value":19},"rbx":{"value":1357259060000},"trap":{"value":133},"err":{"value":33554435},"r11":{"value":582},"rip":{"value":140703568250290},"rbp":{"value":123145319964544},"rsp":{"value":123145319964184},"r12":{"value":4},"rcx":{"value":123145319964184},"flavor":"x86_THREAD_STATE","rdi":{"value":19}},"frames":[{"imageOffset":5554,"symbol":"read","symbolLocation":10,"imageIndex":10},{"imageOffset":6497612,"symbol":"v8::CodeEvent::GetFunctionName()","symbolLocation":35468,"imageIndex":1},{"imageOffset":68434671,"symbol":"ares_dns_rr_get_name","symbolLocation":5926943,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":96196,"name":"NetworkConfigWatcher","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":270492745334784},"rsi":{"value":21592279046},"r8":{"value":118923456},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":270492745334784},"r9":{"value":270492745334784},"r15":{"value":2},"rbx":{"value":123145421233712},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":140703568247626},"rbp":{"value":123145421233552},"rsp":{"value":123145421233448},"r12":{"value":270492745334784},"rcx":{"value":123145421233448},"flavor":"x86_THREAD_STATE","rdi":{"value":123145421233712}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":10},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":10},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":10},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":10},{"imageOffset":506754,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":12},{"imageOffset":501199,"symbol":"__CFRunLoopRun","symbolLocation":1430,"imageIndex":12},{"imageOffset":498178,"symbol":"CFRunLoopRunSpecific","symbolLocation":536,"imageIndex":12},{"imageOffset":372723,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":216,"imageIndex":13},{"imageOffset":68527338,"symbol":"ares_dns_rr_get_name","symbolLocation":6019610,"imageIndex":1},{"imageOffset":68520242,"symbol":"ares_dns_rr_get_name","symbolLocation":6012514,"imageIndex":1},{"imageOffset":68204281,"symbol":"ares_dns_rr_get_name","symbolLocation":5696553,"imageIndex":1},{"imageOffset":67942532,"symbol":"ares_dns_rr_get_name","symbolLocation":5434804,"imageIndex":1},{"imageOffset":68355288,"symbol":"ares_dns_rr_get_name","symbolLocation":5847560,"imageIndex":1},{"imageOffset":68355740,"symbol":"ares_dns_rr_get_name","symbolLocation":5848012,"imageIndex":1},{"imageOffset":68434671,"symbol":"ares_dns_rr_get_name","symbolLocation":5926943,"imageIndex":1},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":96197,"frames":[{"imageOffset":6216,"symbol":"thread_start","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":0},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":63491},"r8":{"value":123145429639168},"cr2":{"value":0},"rdx":{"value":4628253264,"symbolLocation":5926784,"symbol":"ares_dns_rr_get_name"},"r10":{"value":0},"r9":{"value":419432703},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":222},"err":{"value":0},"r11":{"value":0},"rip":{"value":140703568500808},"rbp":{"value":0},"rsp":{"value":123145429639168},"r12":{"value":0},"rcx":{"value":1357259237856},"flavor":"x86_THREAD_STATE","rdi":{"value":123145429639168}}}],
  "usedImages" : [
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4386893824,
    "CFBundleShortVersionString" : "0.1.1",
    "CFBundleIdentifier" : "com.gastofacil.desktop",
    "size" : 8192,
    "uuid" : "4c4c447f-5555-3144-a1dd-faef3c344812",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/MacOS\/Gasto Fácil",
    "name" : "Gasto Fácil",
    "CFBundleVersion" : "0.1.1"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4559818752,
    "CFBundleIdentifier" : "com.github.Electron.framework",
    "size" : 164458496,
    "uuid" : "4c4c44c2-5555-3144-a1bf-d483acb47836",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/Electron Framework.framework\/Versions\/A\/Electron Framework",
    "name" : "Electron Framework",
    "CFBundleVersion" : "32.3.3"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4387057664,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.github.Squirrel",
    "size" : 86016,
    "uuid" : "4c4c4476-5555-3144-a186-fb1115cc5f6d",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/Squirrel.framework\/Versions\/A\/Squirrel",
    "name" : "Squirrel",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4387557376,
    "CFBundleShortVersionString" : "3.1.0",
    "CFBundleIdentifier" : "com.electron.reactive",
    "size" : 270336,
    "uuid" : "4c4c4455-5555-3144-a11d-71198949c016",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/ReactiveObjC.framework\/Versions\/A\/ReactiveObjC",
    "name" : "ReactiveObjC",
    "CFBundleVersion" : "0.0.0"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4387184640,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "org.mantle.Mantle",
    "size" : 49152,
    "uuid" : "4c4c4415-5555-3144-a125-65c56041fe04",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/Mantle.framework\/Versions\/A\/Mantle",
    "name" : "Mantle",
    "CFBundleVersion" : "0.0.0"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4390322176,
    "size" : 2138112,
    "uuid" : "4c4c443c-5555-3144-a1fc-29b6b2fc6a9d",
    "path" : "\/Applications\/Gasto Fácil.app\/Contents\/Frameworks\/Electron Framework.framework\/Versions\/A\/Libraries\/libffmpeg.dylib",
    "name" : "libffmpeg.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64h",
    "base" : 4540846080,
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
    "base" : 140703568777216,
    "size" : 189560,
    "uuid" : "cd7c41c5-ce28-3129-9b0e-b8d126b2a0c5",
    "path" : "\/usr\/lib\/system\/libsystem_info.dylib",
    "name" : "libsystem_info.dylib"
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
  "vmSummary" : "ReadOnly portion of Libraries: Total=1.3G resident=0K(0%) swapped_out_or_unallocated=1.3G(100%)\nWritable regions: Total=1.2G written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=1.2G(100%)\n\n                                VIRTUAL   REGION \nREGION TYPE                        SIZE    COUNT (non-coalesced) \n===========                     =======  ======= \nActivity Tracing                   256K        1 \nColorSync                           12K        2 \nCoreGraphics                         4K        1 \nCoreServices                       192K        1 \nFoundation                          16K        1 \nIOKit                             7940K        1 \nKernel Alloc Once                    8K        1 \nMALLOC                           536.2M       28 \nMALLOC guard page                   48K       12 \nMemory Tag 253                    32.0G      941 \nMemory Tag 255                     1.1T       66 \nMemory Tag 255 (reserved)          464K        8         reserved VM address space (unallocated)\nSTACK GUARD                       56.1M       22 \nStack                            115.2M       22 \nVM_ALLOCATE                         72K        3 \n__CTF                               824        1 \n__DATA                            34.5M      915 \n__DATA_CONST                     106.4M      936 \n__DATA_DIRTY                      2588K      342 \n__FONT_DATA                        2352        1 \n__INFO_FILTER                         8        1 \n__LINKEDIT                       163.2M        9 \n__OBJC_RO                         61.3M        1 \n__OBJC_RW                         2396K        2 \n__TEXT                             1.2G      953 \n__TPRO_CONST                         16        2 \nmapped file                      212.6M       19 \nshared memory                     1304K       17 \n===========                     =======  ======= \nTOTAL                              1.1T     4309 \nTOTAL, minus reserved VM space     1.1T     4309 \n",
  "legacyInfo" : {
  "threadTriggered" : {
    "name" : "CrBrowserMain",
    "queue" : "com.apple.main-thread"
  }
},
  "logWritingSignature" : "eed90899e0e95681b21f5059c946f2d07a985976",
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
