import React from 'react';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { buildUrl } from '@/helpers/url';

function App() {
  const a = buildUrl();

  return (
    <ProLayout
      style={{
        minHeight: '100vh',
      }}
    >
      <PageContainer content="this is content">Hello World</PageContainer>
    </ProLayout>
  );
}

export default App;
