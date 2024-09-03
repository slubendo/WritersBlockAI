import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ai')({
  component: AI,
});
function AI() {
  return (
    <div className='min-h-svh'></div>
    )
}

export default AI;