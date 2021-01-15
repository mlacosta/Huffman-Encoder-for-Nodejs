const train = `[SERVICE]
    Flush     1
    Daemon    off
    Log_Level info
    HTTP_Server On
    HTTP_Listen 0.0.0.0
    HTTP_Port 2020

[INPUT]
    name cpu
    tag  cpu.local
    interval_sec 1

[OUTPUT]
    name  stdout
    match *

[OUTPUT]
    name splunk
    Match       cpu.*
    Host        104.197.113.151
    Port        8088
    Splunk_Token 65e61734-44ea-4ce6-8492-35a3487f65c5
    tls On
    tls.verify off 

[SERVICE]
    Flush 1
    Daemon Off
    Log_Level info
    Parsers_File parsers.conf
    Parsers_File custom_parsers.conf
    HTTP_Server On
    HTTP_Listen 0.0.0.0
    HTTP_Port 2020

[INPUT]
    Name tail
    Path /var/log/containers/*.log
    Parser docker
    Tag kube.*
    Mem_Buf_Limit 5MB
    Skip_Long_Lines On

[INPUT]
    Name systemd
    Tag host.*
    Systemd_Filter _SYSTEMD_UNIT=kubelet.service
    Read_From_Tail On

[FILTER]
    Name kubernetes
    Match kube.*
    Merge_Log On
    Keep_Log Off
    K8S-Logging.Parser On
    K8S-Logging.Exclude On

[OUTPUT]
    Name es
    Match kube.*
    Host elasticsearch-master
    Logstash_Format On
    Retry_Limit False

[OUTPUT]
    Name es
    Match host.*
    Host elasticsearch-master
    Logstash_Format On
    Logstash_Prefix node
    Retry_Limit False

[SERVICE]
    Flush     5
    Daemon    off
    Log_Level debug

[INPUT]
    Name  cpu
    Tag   my_cpu

[OUTPUT]
    Name  stdout
    Match my*cpu

[SERVICE]

    Flush        5
    Daemon       Off
    Log_Level    info
    Parsers_File parsers.conf
    Plugins_File plugins.conf
    HTTP_Server  Off
    HTTP_Listen  0.0.0.0
    HTTP_Port    2020

[INPUT]
    Name cpu
    Tag  cpu.local
    Interval_Sec 1

[OUTPUT]
    Name  stdout
    Match *

[SERVICE]
    # setting application logs level to debug
    Log_Level debug
    # setting location for the parsers file
    Parsers_File parsers.conf
    # setting location for Coralogix plugin
    Plugins_File  plugins.conf
[INPUT]
    # using tail input to tail log files
    Name        tail
    # setting the path for the file to tail
    Path        /var/log/fluent-bit/app.log
    # enabling multiline options
    Multiline On
    # using the parser called multiline_pattern for determine first line
    Parser_Firstline multiline_pattern
    # Adding a field named filename to be assigned with the path of the tailed file
    Path_Key filename
[OUTPUT]
    # setting up Coralogix's output plugin to forward logs to Coralogix
    Name coralogix
    # here you add your Coralogix account private key
    Private_Key xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    # here you add your Coralogix account company ID
    company_id xxxx
    # setting application name as prod
    App_Name prod
    # setting subsystem name as app
    Sub_Name app
    # forward all logs from all inputs
    Match *

[SERVICE]
    Flush         1
    Log_File      /var/log/fluentbit.log
    Log_Level     error
    Daemon        off
    Parsers_File  parsers.conf
    HTTP_Server   On
    HTTP_Listen   0.0.0.0
    HTTP_Port     2020

[INPUT]
    Name cpu
    Tag  cpu.test
    Interval_Sec 10

[INPUT]
    Name              tail
    Tag               test.file
    Path              /var/log/apache2/error.log
    DB                /var/log/apache2_error.db
    Path_Key          filename
    Parser            apache2
    Mem_Buf_Limit     8MB
    Skip_Long_Lines   On
    Refresh_Interval  30

[FILTER]
    Name record_modifier
    Match *
    Record logtype nginx
    Record hostname \${HOSTNAME}
    Record service_name Sample-App-Name

[OUTPUT]
    Name  newrelic
    Match *
    apiKey \${API_KEY}

[SERVICE]
    Flush         1
    Log_File      /var/log/fluentbit.log
    Log_Level     error
    Daemon        off
    Parsers_File  parsers.conf
    HTTP_Server   On
    HTTP_Listen   0.0.0.0
    HTTP_Port     2020

[INPUT]
    Name cpu
    Tag  cpu.test
    Interval_Sec 10

[INPUT]
    Name              tail
    Tag               test.file
    Path              /var/log/apache2/error.log
    DB                /var/log/apache2_error.db
    Path_Key          filename
    Parser            apache2
    Mem_Buf_Limit     8MB
    Skip_Long_Lines   On
    Refresh_Interval  30

[OUTPUT]
    Name        datadog
    Match       *
    Host        http-intake.logs.datadoghq.com
    TLS         on
    compress    gzip
    apikey      <my-datadog-api-key>
    dd_service  <my-app-service>
    dd_source   <my-app-source>
    dd_tags     team:logs,foo:bar

[SERVICE]
                  HTTP_Server    On
                  Config_Watch   Off
                  HTTP_Listen    0.0.0.0
                  HTTP_PORT      2020
                  Flush          1
                  Daemon         Off
                  Log_Level      info
                  Parsers_File   parsers.conf
                  Parsers_File   custom_parsers.conf
[INPUT]
                  Name               tail
                  Path               /var/log/containers/*.log
                  Parser             docker
                  Tag                kube.*
                  Refresh_Interval   5
                  Mem_Buf_Limit      2G
                  Read_from_Head     on
                  DB                 /var/log/flb_kube.db
                  DB.Sync            Off
                  DB.locking         true
                  Skip_Long_Lines    On
                  Docker_Mode        On
[INPUT]
                  Name               systemd
                  Tag                host.*
                  Path               /var/log/journal
                  DB                 /var/log/flb_systemd.db
                  Strip_Underscores  true
                  Systemd_Filter     _SYSTEMD_UNIT=kubelet.service
                  Systemd_Filter     _SYSTEMD_UNIT=docker.service
                  Systemd_Filter     _SYSTEMD_UNIT=containerd.service

[FILTER]
                  Name           kubernetes
                  Match          kube.*
                  Kube_URL       https://kubernetes.default.svc:443
                  Merge_Log On
                  Keep_Log Off
                  Buffer_Size         0
                  tls.debug           3
[FILTER]
                  Name modify
                  Match *
                  Set LoggingAgent fluent-bit
                  Set KubeClusterName \${CLUSTER_NAME}
                  Set KubeClusterAbbreviation \${CLUSTER_NAME}
                  Set KubeClusterRegion \${CLUSTER_REGION}
                  Set KubeHostname \${HOST_NAME}
                  Set KubeHostIP \${HOST_IP}
[FILTER]
                  Name        nest
                  Match       *
                  Operation   nest
                  Wildcard    *
                  Nest_under  event
[FILTER]
                  Name        modify
                  Match       *
                  Set index   \${SPLUNK_INDEX}

[OUTPUT]
                  Name             splunk
                  Match            *
                  Host             \${SPLUNK_HOST}
                  Splunk_Token     \${SPLUNK_TOKEN}
                  Port             443
                  TLS              On
                  TLS.Verify       Off
                  Splunk_Send_Raw  On
                  tls.debug        3

[SERVICE]
                  HTTP_Server    On
                  Config_Watch   Off
                  HTTP_Listen    0.0.0.0
                  HTTP_PORT      2020
                  Flush          1
                  Daemon         Off
                  Log_Level      info
                  Parsers_File   parsers.conf
                  Parsers_File   custom_parsers.conf
[INPUT]
                  Name               tail
                  Path               /var/log/containers/*.log
                  Parser             docker
                  Tag                kube.*
                  Refresh_Interval   5
                  Mem_Buf_Limit      2G
                  Read_from_Head     on
                  DB                 /var/log/flb_kube.db
                  DB.Sync            Off
                  DB.locking         true
                  Skip_Long_Lines    On
                  Docker_Mode        On
[INPUT]
                  Name               systemd
                  Tag                host.*
                  Path               /var/log/journal
                  DB                 /var/log/flb_systemd.db
                  Strip_Underscores  true
                  Systemd_Filter     _SYSTEMD_UNIT=kubelet.service
                  Systemd_Filter     _SYSTEMD_UNIT=docker.service
                  Systemd_Filter     _SYSTEMD_UNIT=containerd.service[FILTER]
                  Name           kubernetes
                  Match          kube.*
                  Kube_URL       https://kubernetes.default.svc:443
                  Merge_Log On
                  Keep_Log Off
                  Buffer_Size         0
                  tls.debug           3
[FILTER]
                  Name modify
                  Match *
                  Set LoggingAgent fluent-bit
                  Set KubeClusterName \${CLUSTER_NAME}
                  Set KubeClusterAbbreviation \${CLUSTER_NAME}
                  Set KubeClusterRegion \${CLUSTER_REGION}
                  Set KubeHostname \${HOST_NAME}
                  Set KubeHostIP \${HOST_IP}
[FILTER]
                  Name        nest
                  Match       *
                  Operation   nest
                  Wildcard    *
                  Nest_under  event
[FILTER]
                  Name        modify
                  Match       *
                  Set index   \${SPLUNK_INDEX} [OUTPUT]
                  Name             splunk
                  Match            *
                  Host             \${SPLUNK_HOST}
                  Splunk_Token     \${SPLUNK_TOKEN}
                  Port             443
                  TLS              On
                  TLS.Verify       Off
                  Splunk_Send_Raw  On
                  tls.debug        3 [OUTPUT]
                  Name             splunk
                  Match            host.*
                  Host             \${SPLUNK_HOST}
                  Splunk_Token     \${SPLUNK_TOKEN}
                  Port             443
                  TLS              On
                  TLS.Verify       Off
                  Splunk_Send_Raw  On
                  tls.debug        3

    [SERVICE]
        Flush                     5
        Daemon                    Off
        Log_Level                 info
        Parsers_File              parsers.conf
        HTTP_Server               On
        HTTP_Listen               0.0.0.0
        HTTP_Port                 2020
        Storage.path              /buffers
        Storage.sync              normal
        Storage.checksum          off
        Storage.backlog.mem_limit 25M
    [INPUT]
        Name             tail
        Tag              containers.*
        Path             /var/log/containers/*.log
        Parser           docker
        Docker_Mode      on
        DB               /tail-db/tail-containers-state.db
        DB.Sync          Normal
        Mem_Buf_Limit    5MB
        Refresh_Interval 1
        Rotate_Wait      60
        Skip_Long_Lines  On
        Storage.type     filesystem
    [INPUT]
        Name            systemd
        Tag             host.*
        Systemd_Filter  _SYSTEMD_UNIT=addon-config.service
        Systemd_Filter  _SYSTEMD_UNIT=addon-run.service
        Systemd_Filter  _SYSTEMD_UNIT=cfn-etcd-environment.service
        Systemd_Filter  _SYSTEMD_UNIT=cfn-signal.service
        Systemd_Filter  _SYSTEMD_UNIT=clean-ca-certificates.service
        Systemd_Filter  _SYSTEMD_UNIT=containerd.service
        Systemd_Filter  _SYSTEMD_UNIT=coreos-metadata.service
        Systemd_Filter  _SYSTEMD_UNIT=coreos-setup-environment.service
        Systemd_Filter  _SYSTEMD_UNIT=coreos-tmpfiles.service
        Systemd_Filter  _SYSTEMD_UNIT=dbus.service
        Systemd_Filter  _SYSTEMD_UNIT=docker.service
        Systemd_Filter  _SYSTEMD_UNIT=efs.service
        Systemd_Filter  _SYSTEMD_UNIT=etcd-member.service
        Systemd_Filter  _SYSTEMD_UNIT=etcd.service
        Systemd_Filter  _SYSTEMD_UNIT=etcd2.service
        Systemd_Filter  _SYSTEMD_UNIT=etcd3.service
        Systemd_Filter  _SYSTEMD_UNIT=etcdadm-check.service
        Systemd_Filter  _SYSTEMD_UNIT=etcdadm-reconfigure.service
        Systemd_Filter  _SYSTEMD_UNIT=etcdadm-save.service
        Systemd_Filter  _SYSTEMD_UNIT=etcdadm-update-status.service
        Systemd_Filter  _SYSTEMD_UNIT=flanneld.service
        Systemd_Filter  _SYSTEMD_UNIT=format-etcd2-volume.service
        Systemd_Filter  _SYSTEMD_UNIT=kube-node-taint-and-uncordon.service
        Systemd_Filter  _SYSTEMD_UNIT=kubelet.service
        Systemd_Filter  _SYSTEMD_UNIT=ldconfig.service
        Systemd_Filter  _SYSTEMD_UNIT=locksmithd.service
        Systemd_Filter  _SYSTEMD_UNIT=logrotate.service
        Systemd_Filter  _SYSTEMD_UNIT=lvm2-monitor.service
        Systemd_Filter  _SYSTEMD_UNIT=mdmon.service
        Systemd_Filter  _SYSTEMD_UNIT=nfs-idmapd.service
        Systemd_Filter  _SYSTEMD_UNIT=nfs-mountd.service
        Systemd_Filter  _SYSTEMD_UNIT=nfs-server.service
        Systemd_Filter  _SYSTEMD_UNIT=nfs-utils.service
        Systemd_Filter  _SYSTEMD_UNIT=node-problem-detector.service
        Systemd_Filter  _SYSTEMD_UNIT=ntp.service
        Systemd_Filter  _SYSTEMD_UNIT=oem-cloudinit.service
        Systemd_Filter  _SYSTEMD_UNIT=rkt-gc.service
        Systemd_Filter  _SYSTEMD_UNIT=rkt-metadata.service
        Systemd_Filter  _SYSTEMD_UNIT=rpc-idmapd.service
        Systemd_Filter  _SYSTEMD_UNIT=rpc-mountd.service
        Systemd_Filter  _SYSTEMD_UNIT=rpc-statd.service
        Systemd_Filter  _SYSTEMD_UNIT=rpcbind.service
        Systemd_Filter  _SYSTEMD_UNIT=set-aws-environment.service
        Systemd_Filter  _SYSTEMD_UNIT=system-cloudinit.service
        Systemd_Filter  _SYSTEMD_UNIT=systemd-timesyncd.service
        Systemd_Filter  _SYSTEMD_UNIT=update-ca-certificates.service
        Systemd_Filter  _SYSTEMD_UNIT=user-cloudinit.service
        Systemd_Filter  _SYSTEMD_UNIT=var-lib-etcd2.service
        Max_Entries     1000
        Read_From_Tail  true
    [FILTER]
        Name                kubernetes
        Match               containers.*
        Kube_Tag_Prefix     kubernetes.var.log.containers.
        Kube_URL            https://kubernetes.default.svc:443
        Kube_CA_File        /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        Kube_Token_File     /var/run/secrets/kubernetes.io/serviceaccount/token
        Merge_Log           On
        K8S-Logging.Parser  On
        K8S-Logging.Exclude On
    [OUTPUT]
        Name          forward
        Match         *
        Host          {{ index .Values "logging-operator" "fluentd" "serviceName" }}-fluentd.{{ .Release.Namespace }}.svc.cluster.local
        Port          {{ index .Values "logging-operator" "fluentd" "servicePort" | default "24240" }}
        Retry_Limit   False
    [OUTPUT]
        Name          forward
        Match         *
        Host          {{ template "infra-stack-sumologic.fullname" . }}.{{ .Release.Namespace }}.svc.cluster.local.
        Port          {{ index .Values "sumologic" "fluent-bit" "backend" "forward" "port" | default "24321" }}
        Retry_Limit   False
  parsers.conf: |
    [PARSER]
        Name         docker
        Format       json
        Time_Key     time
        Time_Format  %Y-%m-%dT%H:%M:%S.%L
        Time_Keep    On

[SERVICE]
    flush 	1
    log_level info
[INPUT]
    name  	dummy
    dummy 	{"name": "Fluent Bit", "year": 2020, "color": "blue"}
    tag   	var.log.containers.0.log
[INPUT]
    Name  	dummy
    Dummy 	{"name": "Fluent Bit", "year": 2019, "color": "green"}
    Tag   	var.log.containers.1.log
[FILTER]
    name  	grep
    match 	*
    regex 	$color ^blue$
[OUTPUT]
    Name  	stdout
    Match 	*
    Format	json_lines
[OUTPUT]
    name              	azure_blob
    match             	*
    account_name      	HIDDEN
    shared_key        	HIDDEN
    path              	kubernetes/$color
    container_name    	logs
    auto_create_container on
    tls               	off
    blob_type         	appendblob

[SERVICE]
    Flush     1
    Daemon    off
    Log_Level info
    HTTP_Server On
    HTTP_Listen 0.0.0.0
    HTTP_Port 2020
    storage.metrics on
[INPUT]
    name cpu
    tag  cpu.local
    interval_sec 1
[OUTPUT]
    name  stdout
    match *
[OUTPUT]
    name splunk
    Match       cpu.*
    Host        104.197.113.151
    Port        8088
    Splunk_Token 65e61734-44ea-4ce6-8492-35a3487f65c5
    tls On
    tls.verify off

[SERVICE]
    flush        1
    log_level    info
    parsers_file parsers.conf
    plugins_file plugins.conf
    http_server  On
    http_listen  0.0.0.0
    http_port    2020
    storage.metrics on

[INPUT]
    name forward
    buffer_chunk_size 1M
    buffer_max_size 500M

[OUTPUT]
    name splunk
    workers 4
    host 10.128.0.32
    port 8443
    tls on
    tls.verify none
    match *
    splunk_token xyz

apiVersion: v1
kind: ConfigMap
metadata:
  name: fluent-bit-config
  namespace: default
  labels:
    k8s-app: newrelic-logging
data:
  # Configuration files: server, input, filters and output
  # ======================================================
  fluent-bit.conf: |
    [SERVICE]
        Flush         1
        Log_Level     \${LOG_LEVEL}
        Daemon        off
        Parsers_File  parsers.conf
        HTTP_Server   On
        HTTP_Listen   0.0.0.0
        HTTP_Port     2020
    @INCLUDE input-kubernetes.conf
    @INCLUDE output-newrelic.conf
    @INCLUDE filter-kubernetes.conf
  input-kubernetes.conf: |
    [INPUT]
        Name              tail
        Tag               kube.*
        Path              \${PATH}
        Parser            \${LOG_PARSER}
        DB                /var/log/flb_kube.db
        Mem_Buf_Limit     7MB
        Skip_Long_Lines   On
        Refresh_Interval  10
  filter-kubernetes.conf: |
    [FILTER]
        Name record_modifier
        Match kube.*
        Record cluster \${CLUSTER_NAME}
    [FILTER]
        Name                kubernetes
        Match               kube.*
        Kube_URL            https://kubernetes.default.svc.cluster.local:443
        K8S-Logging.Exclude On
        Labels              On
        Annotations         On
        Merge_Log           Off
  output-newrelic.conf: |
    [OUTPUT]
        Name  newrelic
        Match *
        licenseKey \${NRIA_LICENSE_KEY}
        endpoint \${ENDPOINT}
  parsers.conf: |
    [PARSER]
        Name         docker
        Format       json
        Time_Key     time
        Time_Format  %Y-%m-%dT%H:%M:%S.%L
        Time_Keep    On
    [PARSER]
        Name cri
        Format regex
        Regex ^(?<time>[^ ]+) (?<stream>stdout|stderr) (?<logtag>[^ ]*) (?<log>.*)$
        Time_Key     time
        Time_Format  %Y-%m-%dT%H:%M:%S.%L%z

kind: ConfigMap
apiVersion: v1
metadata:
  name: fluent-bit
  namespace: logging
  selfLink: /api/v1/namespaces/logging/configmaps/fluent-bit
  uid: d68a6ecf-4dd5-4a98-9316-8ea6e7c7277e
  resourceVersion: '95113754'
  creationTimestamp: '2020-11-16T16:11:50Z'
  labels:
    app.kubernetes.io/instance: fluent-bit
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: fluent-bit
    app.kubernetes.io/version: 1.6.8
    helm.sh/chart: fluent-bit-0.7.13
data:
  custom_parsers.conf: |
    [PARSER]
        Name docker_no_time
        Format json
        Time_Keep Off
        Time_Key time
        Time_Format %Y-%m-%dT%H:%M:%S.%L
  fluent-bit.conf: |
    [SERVICE]
        Flush 1
        Daemon Off
        Log_Level info
        Parsers_File parsers.conf
        Parsers_File custom_parsers.conf
        HTTP_Server On
        HTTP_Listen 0.0.0.0
        HTTP_Port 2020
        storage.path /var/log/flb-storage/
    [INPUT]
        Name tail
        Path /var/log/containers/*.log
        Parser docker
        Tag kube.*
        Mem_Buf_Limit 5MB
        Skip_Long_Lines On
        Docker_Mode On
        Docker_Mode_Flush 4
        DB /var/log/flb-storage/tail.db
        DB.Sync normal
        storage.type  filesystem
    [INPUT]
        Name systemd
        Systemd_Filter _SYSTEMD_UNIT=docker.service
        Systemd_Filter _SYSTEMD_UNIT=containerd.service
        Systemd_Filter _SYSTEMD_UNIT=kubelet.service
        Tag host.*
        Read_From_Tail On
        Strip_Underscores On
        DB /var/log/flb-storage/systemd.db
        DB.Sync normal
        storage.type  filesystem
    [FILTER]
        Name kubernetes
        Match kube.*
        Merge_Log On
        Merge_Log_Key log_processed
        Keep_Log Off
        K8S-Logging.Parser On
        K8S-Logging.Exclude On
    [OUTPUT]
        Name forward
        Match *
        Host fluentd.logging.svc
        Port 24224
    [OUTPUT]
        Name loki
        Match kube.*
        Host loki.logging.svc
        Port 3100
        labels job=fluent-bit, host=$kubernetes['host'], namespace=$kubernetes['namespace_name'], pod=$kubernetes['pod_name'], container=$kubernetes['container_name']
        auto_kubernetes_labels on
    [OUTPUT]
        Name loki
        Match *
        Host second.logging.svc
        Port 53100
        labels job=fluent-bit, host=$kubernetes['host'], namespace=$kubernetes['namespace_name'], pod=$kubernetes['pod_name'], container=$kubernetes['container_name']
        auto_kubernetes_labels on

  fluent-bit.conf: |
    [SERVICE]
        Flush         1
        Log_Level     info
        Daemon        off
        Parsers_File  parsers.conf
        HTTP_Server   On
        #HTTP_Listen   0.0.0.0
        #HTTP_Port     2020
    @INCLUDE input-kubernetes.conf
    @INCLUDE filter-kubernetes.conf
    @INCLUDE output-graylog.conf
  input-kubernetes.conf: |
    [INPUT]
        Name              tail
        Tag               kube.*
        Path              /var/log/containers/*.log
        Parser            docker
        DB                /var/log/flb_kube.db
        Mem_Buf_Limit     50MB
        Skip_Long_Lines   On
        Refresh_Interval  10
        Docker_Mode On
        Docker_Mode_Parser java_multi_line
  filter-kubernetes.conf: |
    [FILTER]
        Name                kubernetes
        Match               kube.*
        Kube_URL            https://kubernetes.default.svc.cluster.local:443
        Merge_Log           On
        K8S-Logging.Parser  On
    # (DOLLAR){HOSTNAME} returns the host name.
    # But Fluentbit runs in a container. So, it is not meaningful.
    # Instead, copy the host name from the Kubernetes object.
    [FILTER]
        Name nest
        Match *
        Operation lift
        Nested_under kubernetes
    # Remove offending fields, see: https://github.com/fluent/fluent-bit/issues/1291
    [FILTER]
        Name     parser
        Match    *
        Key_Name log
        Parser   json
    [FILTER]
        Name record_modifier
        Match *
        Remove_key annotations
        Remove_key labels
    [FILTER]
        name modify
        Match *
        set k8s-cluster ckc-\${terraform.workspace}
  output-graylog.conf: |
    [OUTPUT]
        Name          gelf
        Match         *
        Host          \${var.graylog_host}
        Port          12203
        Mode          tcp
        Gelf_Short_Message_Key log
  parsers.conf: |
    [PARSER]
        Name   json
        Format json
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z
    [PARSER]
        Name        docker
        Format      json
        Time_Key    time
        Time_Format %Y-%m-%dT%H:%M:%S.%L
        # Command      |  Decoder | Field | Optional Action
        # =============|==================|=================
        Decode_Field_As   escaped    log    do_next
        Decode_Field_As   json       log
    [PARSER]
        Name java_multi_line
        Format regex
        Regex (?<log>^{"log":"\d{4}-\d{2}-\d{2}\ \d{2}:\d{2}:\d{2}\.\d{3}\ .*)
    [PARSER]
        Name        syslog
        Format      regex
        Regex       ^\<(?<pri>[0-9]+)\>(?<time>[^ ]* {1,2}[^ ]* [^ ]*) (?<host>[^ ]*) (?<ident>[a-zA-Z0-9_\/\.\-]*)(?:\[(?<pid>[0-9]+)\])?(?:[^\:]*\:)? *(?<message>.*)$
        Time_Key    time
        Time_Format %b %d %H:%M:%S
        
        [SERVICE]
        HTTP_Server on
        HTTP_Port 80
        Parsers_File custom_parsers.conf
     [INPUT]
        Name syslog
        Tag syslog
        Mode tcp
        Listen 0.0.0.0
        Port 514
     [OUTPUT]
        Name  es
        Match syslog
        Host  172.16.78.71
        Port  4026
        Index my_index
        Type  my_type
     [OUTPUT]
        Name   loki
        Match  syslog
        Labels job=fluentbit, $sub['stream']
        Host  loki
        Port  3100
     [OUTPUT]
        Name   stdout
        Match  syslog
    [SERVICE]
        HTTP_Server on
        HTTP_Port 80
        Parsers_File custom_parsers.conf
     [INPUT]
        Name syslog
        Tag syslog
        Mode tcp
        Listen 0.0.0.0
        Port 514
     [OUTPUT]
        Name  es
        Match syslog
        Host  172.16.78.71
        Port  4026
        Index my_index
        Type  my_type
     [OUTPUT]
        Name   loki
        Match  syslog
        Labels job=fluentbit, $sub['stream']
        Host  loki
        Port  3100
     [OUTPUT]
        Name   stdout
        Match  syslog
`


module.exports = train;