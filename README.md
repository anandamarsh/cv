### logon to aws
ssh -i "oBook.pem" ubuntu@ec2-54-252-243-11.ap-southeast-2.compute.amazonaws.com

### start dev server using pm2
pm2 restart node_modules/react-scripts/scripts/start.js --name "cv"
