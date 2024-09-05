import React from 'react';
import { Container, Group, ActionIcon, Text, Box, Stack, Flex } from '@mantine/core';
import { IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const footerData = [
  {
    title: 'Vinted',
    links: [
      { label: 'About us', link: '#' },
      { label: 'Jobs', link: '#' },
      { label: 'Sustainability', link: '#' },
      { label: 'Press', link: '#' },
      { label: 'Advertising', link: '#' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'How it works', link: '#' },
      { label: 'Mobile apps', link: '#' },
      { label: 'Infoboard', link: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Help Center', link: '#' },
      { label: 'Selling', link: '#' },
      { label: 'Buying', link: '#' },
      { label: 'Trust and Safety', link: '#' },
    ],
  },
];

export function Footer() {
  const groups = footerData.map((group) => (
    <Box key={group.title} w={160}>
      <Text fw={700} fz="lg" mb="xs">{group.title}</Text>
      <Stack spacing="xs">
        {group.links.map((link, index) => (
          <Text<'a'>
            key={index}
            component="a"
            href={link.link}
            // onClick={(event) => event.preventDefault()}
            c="dimmed"
            fz="sm"
          >
            {link.label}
          </Text>
        ))}
      </Stack>
    </Box>
  ));

  return (
    <Box component="footer" mt={120} pt="xl" pb="xl" borderTop="1px solid" borderColor="gray.3">
      <Container>
        <Flex
          justify="space-between"
          align="flex-start"
          direction={{ base: 'column', sm: 'row' }}
        >
          {groups}
        </Flex>
      </Container>
      <Container mt="xl" pt="xl" pb="xl" borderTop="1px solid" borderColor="gray.3">
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column', sm: 'row' }}
          gap="md"
        >
          <Group spacing="xs" position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandFacebook size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandLinkedin size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
          <Group spacing="xs">
            <Link href="#" passHref>
              <Text component="a" c="dimmed" fz="sm">Privacy Policy</Text>
            </Link>
            <Link href="#" passHref>
              <Text component="a" c="dimmed" fz="sm">Cookie Policy</Text>
            </Link>
            <Link href="#" passHref>
              <Text component="a" c="dimmed" fz="sm">Cookie Settings</Text>
            </Link>
            <Link href="#" passHref>
              <Text component="a" c="dimmed" fz="sm">Terms & Conditions</Text>
            </Link>
          </Group>
          <Group spacing="xs">
            <Link href="https://apps.apple.com/app/apple-store/id" passHref>
              <Image src="/api/placeholder/135/40" width={135} height={40} alt="Download on the App Store" />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=" passHref>
              <Image src="/api/placeholder/135/40" width={135} height={40} alt="Get it on Google Play" />
            </Link>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;