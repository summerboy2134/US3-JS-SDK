import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
    endpoint: "http://s3-cn-sh2.ufileos.com",  // http://s3-cn-sh2.ufileos.com
    region: "cn-sh2",    // cn-sh2
    signatureVersion: 'v4',
    credentials: {
        accessKeyId: "4ZDughY8BbJ4eFdfluTdHT1B7CP3rJiR7",
        secretAccessKey: "ElbIUKKxvdWImIGzFskX6J7GeYYvJDsNZBlUQqtVbrlw",
    },
    forcePathStyle: true,   // 路径风格
});

export default s3;
