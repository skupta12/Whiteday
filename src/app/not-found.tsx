import { Container } from '@/components';
import { Button } from '@/components/ui';
import styles from '@/styles';
import React from 'react'

const NotFoundPage = () => {
  return (
    <section>
      <Container className='flex items-center justify-center text-center my-40'>
        <div className='border border-white p-15 flex flex-col gap-y-6'>
          <h1 className="text-[120px] text-white font-semibold leading-[0.7]">404</h1>
          <h2 className={styles.headingH2}>Page Not Found</h2>
          <p className={`${styles.paragraph}`}>The page you are looking for doesn&apos;t exist or has been moved</p>
          <Button variant='default' href='/' type="button">Back to home</Button>
        </div>
      </Container>
    </section>
  )
}

export default NotFoundPage;
