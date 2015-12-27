# GoogleCloudElasticSearchInstance
First of all - Why am I even uploading this? 

Because it is ambiguos for many people like me to adhere to minor issues that is their because of incomplete doc online. 

Complete deployment in steps

1| On your google cloud dashboard go for pre-built solutions deployement and then deploy one instance for elastic search. 

2| Go in network section and make sure that tcp:9200 is open - refer to bitnami wiki for elastic search 

3| Major problem is based on bitnami wiki you will like to use the .publish_host IP to access your server

4| That won't work therefore simply copy the ip along with port via which you access your server directly from Google Cloud 

5| It will be something likes Your_IP:{port}80/elastichead 

6| It will work just fine then. 
