import React from 'react'
import { BsGithub, } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';
import { IconButton } from '@chakra-ui/react';
import { SiGooglemaps, SiInstagram } from 'react-icons/si';

const Contact = () => {
  return (
    <section id='contact' className='h-screen contact'>
      <div className='flex h-full flex-col gap-5 items-center justify-center '>
        <div className='text-center'>
          <h1 className='text-5xl font-bold'>Let's work together...</h1>
          <h3 className='text-3xl italic pt-2'>How do you take your coffee?</h3>
        </div>
        <div className='flex justify-center text-3xl gap-5'>
          <div className='hover:'>
            <Link href=''>
              <BsGithub />
            </Link>
          </div>
          <div className='hover:'>
            <Link href=''>
              <ImLinkedin />
            </Link>
          </div>
          <div className='hover:'>
            <Link href=''>
              <MdEmail />
            </Link>
          </div>

          <div className='hover:'>
            <Link href=''>
              <FaTwitterSquare />
            </Link>
          </div>
        </div>
      </div>
      <footer className=''>
        <Flex
          className='py-2'
          direction={['column', 'column', 'column']}
          w='full'
          px={6}
          align='center'
          bg={bg}
        >
          <Heading className='py-2' size='md'>
            Gîtes Mon Trésor
          </Heading>
          <div className='px-5'></div>
          <Text>
            <strong>Siret :</strong> 849 500 921 RCS Pointe à Pitre
          </Text>
          <Text fontSize='sm pb-3'>
            Copyright &copy; {new Date().getFullYear()} Tous droits réservés.
          </Text>

          <div className='px-5'></div>
          <HStack spacing={1}>
            {' '}
            <a
              rel='noreferrer'
              target={'_blank'}
              href='https://www.facebook.com/gitesmontresor/?locale=fr_FR'
            >
              <IconButton
                className='icon'
                aria-label='Facebook'
                icon={<SiFacebook />}
              ></IconButton>
            </a>{' '}
            <a
              rel='noreferrer'
              target={'_blank'}
              href='https://www.instagram.com/gitesmontresor/'
            >
              <IconButton
                className='icon'
                aria-label='Twitter'
                icon={<SiInstagram />}
              ></IconButton>
            </a>
            <a
              rel='noreferrer'
              target={'_blank'}
              href='https://www.google.com/maps/place/Les+G%C3%AEtes+Mon+Tr%C3%A9sor/@16.4645595,-61.4847141,17z/data=!3m1!4b1!4m6!3m5!1s0x8c133104d554b2bd:0x36ef5cfef0b588d1!8m2!3d16.4645544!4d-61.4825254!16s%2Fg%2F11s7tslv7h'
            >
              <IconButton
                className='icon'
                aria-label='Maps'
                icon={<SiGooglemaps />}
              ></IconButton>
            </a>
          </HStack>
        </Flex>
      </footer>
    </section>
  );
}

export default Contact