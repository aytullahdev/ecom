import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import {
  IconHandLoveYou,
  IconHeart,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";

export default function ProductCard() {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Image
        src="https://www.bmw.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-09.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1627906786501.jpg"
        height={160}
        alt="Norway"
      />

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>THE BMW X3 M</Text>
        <Badge color="teal" variant="filled">
          $99
        </Badge>
      </Group>

      <Group gap={0}>
        <IconStarFilled size={12} />
        <IconStarFilled size={12} />
        <IconStarFilled size={12} />
        <IconStarFilled size={12} />
        <IconStar size={12} />
      </Group>

      <Group justify="space-between" gap={1}>
        <Button flex={1} mt="sm" variant="outline">
          Add to cart
        </Button>

        <Button mt="sm" variant="subtle" >
          <IconHeart size={20} color="red" />
        </Button>
      </Group>
    </Card>
  );
}
