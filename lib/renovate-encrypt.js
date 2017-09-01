#!/usr/bin/env node

const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

let stdin = '';

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    stdin = `${stdin}${chunk}`;
  }
});

process.stdin.on('end', async () => {
  const publicKey = fs.readFileSync(
    path.resolve('public-keys/renovateapp-public.pem'),
    'utf8'
  );
  const buffer = new Buffer(stdin);
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  console.log(encrypted.toString('base64'));
});
